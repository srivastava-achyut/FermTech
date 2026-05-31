export async function sendOtp(phone) {
  return { phone, otp: "123456", devOnly: true };
}
