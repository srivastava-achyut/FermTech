import { z } from "zod";
import { User } from "../models/User.js";
import { comparePassword, hashPassword, signToken } from "../services/auth.service.js";

export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    phone: z.string().min(10),
    email: z.string().email().optional().or(z.literal("")),
    password: z.string().min(6),
    role: z.enum(["farmer", "buyer", "admin"]).default("farmer"),
    language: z.string().default("hi")
  })
});

export const loginSchema = z.object({
  body: z.object({
    phone: z.string().min(10),
    password: z.string().min(6)
  })
});

export async function register(req, res) {
  const data = req.validated.body;
  const exists = await User.findOne({ phone: data.phone });

  if (exists) {
    return res.status(409).json({ message: "Phone number is already registered" });
  }

  const user = await User.create({
    ...data,
    passwordHash: await hashPassword(data.password)
  });

  const token = signToken(user);
  res.status(201).json({ token, user: sanitizeUser(user) });
}

export async function login(req, res) {
  const { phone, password } = req.validated.body;
  const user = await User.findOne({ phone });

  if (!user || !(await comparePassword(password, user.passwordHash))) {
    return res.status(401).json({ message: "Invalid phone or password" });
  }

  res.json({ token: signToken(user), user: sanitizeUser(user) });
}

export async function me(req, res) {
  res.json({ user: sanitizeUser(req.user) });
}

function sanitizeUser(user) {
  const value = user.toObject ? user.toObject() : user;
  delete value.passwordHash;
  return value;
}
