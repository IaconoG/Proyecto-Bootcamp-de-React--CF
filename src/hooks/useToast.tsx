import { useEffect, useState } from "react";

export enum ToastVariant {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export type ToastProps = {
  id: string;
  message: string;
  variant?: ToastVariant;
  isFadingOut?: boolean;
};

export type AddToastProps = Pick<ToastProps, "message" | "variant">;

const DEFAULT_TOAST_DURATION = 3500;
const DEFAULT_TOAST_ANIMATION_DURATION = 500;
const DEFAULT_QUEUE_INTERVAL = 1000;

const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [toastQueue, setToastQueue] = useState<ToastProps[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addToast = ({ message, variant }: AddToastProps) => {
    const newToast: ToastProps = { id: crypto.randomUUID(), message, variant, isFadingOut: false };
    setToastQueue((prevQueue) => [...prevQueue, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    if (!isProcessing && toastQueue.length > 0) {
      setIsProcessing(true);

      const nextToast = toastQueue[0];
      setToasts((prev) => [...prev, nextToast]);
      setToastQueue((prevQueue) => prevQueue.slice(1));

      setTimeout(() => {
        setToasts((prev) =>
          prev.map((toast) => (toast.id === nextToast.id ? { ...toast, isFadingOut: true } : toast))
        );
      }, DEFAULT_TOAST_DURATION - DEFAULT_TOAST_ANIMATION_DURATION);

      setTimeout(() => {
        setIsProcessing(false);
      }, DEFAULT_QUEUE_INTERVAL);

      setTimeout(() => {
        removeToast(nextToast.id);
      }, DEFAULT_TOAST_DURATION);
    }
  }, [toastQueue, isProcessing]);

  return { toasts, addToast };
};

export default useToast;
