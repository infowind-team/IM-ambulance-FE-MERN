'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  Calendar,
  FileText,
  Users,
  Truck,
  Briefcase,
  BarChart3,
  Settings,
  UserCog,
  LogOut,
} from 'lucide-react';
import sidebarLogo from '@/assets/images/logoMain.png'; // Adjust path as needed

export default function FunctionalSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string, exact: boolean = false) => {
    if (exact) return pathname === path;
    return pathname.startsWith(path);
  };

  const NavItem = ({
    to,
    icon: Icon,
    label,
    exact = false,
  }: {
    to: string;
    icon: React.ElementType;
    label: string;
    exact?: boolean;
  }) => {
    const active = isActive(to, exact);

    return (
      <div className="relative px-2">
        {active && (
          <div className="absolute left-0 top-0 h-11 w-2 bg-[#2160AD] rounded-xl" />
        )}
        <button
          onClick={() => router.push(to)}
          className={`flex w-[calc(100%-16px)] items-center gap-3 px-4 py-2 ml-4 h-11 rounded-lg text-left transition-all duration-200 ${
            active
              ? 'bg-[#2160AD] text-white shadow-md'
              : 'hover:bg-[#2160AD]/5 hover:text-[#2160AD] hover:shadow-sm'
          }`}
        >
          <Icon className="w-6 h-6" strokeWidth={1.5} />
          <span className="text-base font-medium">{label}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen h-full w-full md:w-[283px] flex flex-col border-r border-[#2160AD]/10 shadow-sm">
      {/* Logo */}
      <div className="p-2.5">
        <div className="w-[93px] h-auto">
          <Image
            src={sidebarLogo}
            alt="IM Ambulance Logo"
            width={93}
            height={40}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 pt-5 pb-4 space-y-6 overflow-y-auto">
        {/* Operations Section */}
        <div>
          <div className="flex items-center mb-4 mx-2 p-3 rounded-md bg-[#2160AD]/5">
            <span className="text-[14px] font-medium text-[#2160AD] uppercase tracking-wide">
              Operations
            </span>
            <div className="w-[60px] h-px bg-[#2160AD]/20 ml-3" />
          </div>

          <div className="space-y-2">
            <NavItem to="/calendar" icon={Calendar} label="Calendar" exact />
            <NavItem to="/cases" icon={FileText} label="Cases" exact />
            <NavItem to="/rostering" icon={Users} label="Rostering" />
            <NavItem to="/vehicles" icon={Truck} label="Vehicles" exact />
          </div>
        </div>

        {/* Management Section */}
        <div>
          <div className="flex items-center mb-4 mx-2 p-3 rounded-md bg-[#2160AD]/5">
            <span className="text-[14px] font-medium text-[#2160AD] uppercase tracking-wide">
              Management
            </span>
            <div className="h-px bg-[#2160AD]/20 flex-1 ml-3" />
          </div>

          <div className="space-y-1">
            <NavItem to="/services" icon={Briefcase} label="Services" />
            <NavItem to="/hrm" icon={Users} label="HR" />
            <NavItem to="/analytics" icon={BarChart3} label="Analytics & Reports" />
          </div>
        </div>

        {/* System Section */}
        <div>
          <div className="flex items-center mb-4 mx-2 p-3 rounded-md bg-[#2160AD]/5">
            <span className="text-[14px] font-medium text-[#2160AD] uppercase tracking-wide">
              System
            </span>
            <div className="h-px bg-[#2160AD]/20 flex-1 ml-3" />
          </div>

          <div className="space-y-1">
            <NavItem to="/settings" icon={Settings} label="Settings" />
            <NavItem to="/users" icon={UserCog} label="Users" />
          </div>
        </div>
      </nav>

      {/* Bottom: Profile & Logout */}
      <div className="border-t border-[#2160AD]/10 p-4 space-y-2">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => router.push('/my-profile')}>
          <div className="w-10 h-10 bg-[#2160AD] rounded-full flex items-center justify-center">
            <UserCog className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-black">My Profile</p>
            <p className="text-xs text-[#2160AD]/70">Account Settings</p>
          </div>
        </div>

        <button
          onClick={() => router.push('/')}
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 transition-colors text-left"
        >
          <div className="w-10 h-10 bg-[#ffe2e2] rounded-full flex items-center justify-center">
            <LogOut className="w-5 h-5 text-[#E7000B]" />
          </div>
          <span className="text-base font-medium text-[#E7000B]">Sign Out</span>
        </button>
      </div>
    </div>
  );
}