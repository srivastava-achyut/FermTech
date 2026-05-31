export async function notifyUser(_userId, message) {
  return { delivered: Boolean(message) };
}
