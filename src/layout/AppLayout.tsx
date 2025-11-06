// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FunctionalSidebar from "./FunctionalSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IM Ambulance",
  description: "Medical Transport Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <FunctionalSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex flex-col h-full bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
