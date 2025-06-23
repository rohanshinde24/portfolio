import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Navbar />
      <main className="px-4 py-6">
        <Outlet />{' '}
        {/* <-- This is where the "children" components get rendered */}
      </main>
    </div>
  );
}
