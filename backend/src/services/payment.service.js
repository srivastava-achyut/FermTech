export async function createPaymentOrder({ amount }) {
  return { provider: "razorpay", amount, status: "mock-created" };
}
