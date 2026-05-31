export async function sendEmail({ to, subject }) {
  if (!to) return { skipped: true };
  return { queued: true, subject };
}
