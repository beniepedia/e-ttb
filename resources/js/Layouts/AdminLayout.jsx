import React, { useEffect } from 'react';
import DesktopNavigation from './navigations/DesktopNavigation';
import MobileNavigation from './navigations/MobileNavigation';
import useMediaQuery from '../Hooks/useMediaQuery';
import { usePage } from '@inertiajs/react';
import { showToast } from '@/Helper';
import { MeasuringCup } from 'react-bootstrap-icons';
import { Slide, toast, ToastContainer } from 'react-toastify';

export default function AdminLayout({ children }) {
  const { auth, flash } = usePage().props;

  const navItems = [
    {
      href: route('dashboard'),
      label: 'Dashboard',
      icon: 'bi-house',
    },
    {
      href: route('customers'),
      label: 'Pelanggan',
      icon: 'bi-people',
    },
    {
      href: route('receipts'),
      label: 'Tanda Terima',
      icon: 'bi-file-text',
    },
  ];

  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (flash?.type && flash?.message) {
      showToast(flash);
    }
  }, [flash]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <ToastContainer
        newestOnTop
        pauseOnFocusLoss={false}
        closeOnClick
        theme="colored"
        transition={Slide}
      />

      {/* Sidebar untuk Desktop */}
      <DesktopNavigation navItems={navItems} />

      {/* Main Content */}
      <main className={`flex-1 p-6 ${isMobile ? 'pb-20' : 'pb-6'}`}>{children}</main>

      {/* Bottom Nav untuk Mobile */}
      {isMobile && <MobileNavigation navItems={navItems} />}
    </div>
  );
}
