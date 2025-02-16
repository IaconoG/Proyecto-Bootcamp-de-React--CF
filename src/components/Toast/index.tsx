import { ToastProps, ToastVariant } from "../../hooks/useToast";
import styles from "./Toast.module.css";

enum ToastIcons {
  success = "😊",
  error = "😞",
  danger = "💀",
  info = "🤔",
  warning = "❗",
}

const Toast = ({ message, variant = ToastVariant.INFO, isFadingOut }: ToastProps) => {
  return (
    <div className={`${styles.toast} ${styles[variant]} ${isFadingOut ? styles.fadeOut : ""}`}>
      {message} {ToastIcons[variant as keyof typeof ToastIcons]}
    </div>
  );
};

const ToastContainer = ({ toasts }: { toasts: ToastProps[] }) => {
  return (
    <div className={styles.container}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          variant={toast.variant}
          isFadingOut={toast.isFadingOut}
        />
      ))}
    </div>
  );
};

export { Toast, ToastContainer };
