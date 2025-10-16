import './App.css';
import { NotificationProvider } from './context/NotificationContext';
import NotificationBanner from './components/NotificationBanner';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <NotificationProvider>
      <NotificationBanner />
      <Dashboard />
    </NotificationProvider>
  )
}

export default App;
