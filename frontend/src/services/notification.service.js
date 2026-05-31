export async function requestNotifications() {
  if (!("Notification" in window)) return "unsupported";
  return Notification.requestPermission();
}
