import { cloudinary } from "../config/cloudinary.js";

export async function uploadBuffer(buffer, folder = "fermtech") {
  if (!process.env.CLOUDINARY_CLOUD_NAME) {
    return { url: "", publicId: "" };
  }

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error) reject(error);
        else resolve({ url: result.secure_url, publicId: result.public_id });
      }
    );

    stream.end(buffer);
  });
}
