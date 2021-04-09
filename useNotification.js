export const useNotification = (title, options) => {
  if (!("Notifination" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission === "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};