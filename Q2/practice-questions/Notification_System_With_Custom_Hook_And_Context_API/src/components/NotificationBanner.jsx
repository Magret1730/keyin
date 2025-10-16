import useNotification from "../hooks/useNotification";
// import "./NotificationBanner.css";

export default function NotificationBanner() {
    const {message} = useNotification();

    if (!message) return null;

    return (
        <div>{message}</div>
    )
}