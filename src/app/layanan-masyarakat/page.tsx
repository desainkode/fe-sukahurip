"use client";

import React, { useEffect } from "react";
import { LayananHero } from "@/features/layanan/components/LayananHero";
import { ServiceDashboard } from "@/features/layanan/components/ServiceDashboard";
import { useAuth } from "@/features/layanan/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LayananPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not authenticated, redirect to login immediately
    if (!isAuthenticated) {
      router.replace("/layanan-masyarakat/login");
    }
  }, [isAuthenticated, router]);

  // If not authenticated, show nothing to prevent "flashing" the page content
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#000418] flex items-center justify-center">
        <div className="h-12 w-12 border-4 border-[#a2d6f9] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F6F6F8]">
      <LayananHero />
      <div className="relative z-20 -mt-24">
        <ServiceDashboard />
      </div>

      {/* Help Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-[#072ac8]/5 border border-[#072ac8]/10 p-10 md:p-16 text-center">
          <h2 className="text-2xl font-bold text-[#000418]">Butuh Bantuan Lebih Lanjut?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#000418]/50">
            Jika Anda mengalami kendala saat melakukan pengajuan online, silakan hubungi tim IT Desa Sukahurip melalui WhatsApp atau kunjungi langsung Balai Desa.
          </p>
          <button className="mt-8 rounded-full bg-[#000418] px-10 py-4 text-[14px] font-bold text-white shadow-xl hover:bg-[#000E4F] transition-all">
            Hubungi Admin Desa
          </button>
        </div>
      </section>
    </main>
  );
}
