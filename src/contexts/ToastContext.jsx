import { createContext, useContext, useState } from "react";
import Toast from "@components/Toast/Toast";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (type, message) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, type, message }]);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 9999 }}>
                {toasts.map(({ id, type, message }) => (
                    <Toast
                        key={id}
                        type={type}
                        message={message}
                        onClose={() => removeToast(id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};
