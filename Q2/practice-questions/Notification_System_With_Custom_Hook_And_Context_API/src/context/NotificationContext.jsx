import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState("");

    const showNotification = (msg) => {
      setMessage(msg);
    }

    useEffect(()=> {
      let timer;

      if (message) {
        timer = setTimeout(()=> {
          setMessage("");
        }, 3000);
      }

      return () => clearTimeout(timer);
    });

    return (
      <NotificationContext.Provider value={{ message, showNotification }}>
        {children}
      </NotificationContext.Provider>
    );
  };
  