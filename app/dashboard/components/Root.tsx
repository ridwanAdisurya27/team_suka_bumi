"use client";

import { ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import LeaderBoard from "./LeaderBoard";
import { useAuth } from "../../../hooks/useAuth"; // Import useAuth
import { useRouter } from "next/navigation"; // Import useRouter

interface RootProps {
  children: React.ReactNode;
  show?: boolean;
}

export default function RootContent({ children, show = false }: RootProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect jika user belum login
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Tampilkan loading saat authentication check
  if (loading) {
    return (
      <div className="min-h-screen bg-leaf-50 flex items-center justify-center">
        <div className="text-leaf-600 text-xl">Loading...</div>
      </div>
    );
  }

  // Jangan render apapun jika tidak ada user
  if (!user) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}

// export default function Root({ children, show = false }: RootProps) {
//   return (
//     <SidebarProvider>
//       <RootContent children={children} show={show} />
//     </SidebarProvider>
//   );
// }
