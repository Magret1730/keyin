import useNotification from "../hooks/useNotification";

export default function Dashboard() {
    const { showNotification } = useNotification();

    const handleClick = () => {
        showNotification("Item saved successfully!");
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={handleClick}>Save Item</button>
        </div>
    )
}