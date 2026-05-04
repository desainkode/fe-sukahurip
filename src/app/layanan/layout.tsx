'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { LayoutDashboard, FileText, Clock, History, Bell, User, HelpCircle, LogOut, AlertTriangle, Moon, Sun, ChevronLeft, Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'

export default function LayananLayout({ children }: { children: React.ReactNode }) {
  const { user, logout, isLoading } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openGroups, setOpenGroups] = useState<string[]>(['pelayanan'])
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login')
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-desa-blue-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-desa-blue-900 dark:border-desa-yellow-500 border-t-transparent" />
      </div>
    )
  }

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => 
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    )
  }

  const menuGroups = [
    {
      id: 'utama',
      label: 'Utama',
      type: 'link',
      items: [
        { label: 'Dashboard', icon: LayoutDashboard, href: '/layanan/dashboard' },
      ]
    },
    {
      id: 'pelayanan',
      label: 'Layanan Pelayanan',
      type: 'dropdown',
      items: [
        { label: 'Surat Pindah / Datang', icon: FileText, href: '/layanan/pengajuan?type=pindah' },
        { label: 'Akta Kematian / Kelahiran', icon: FileText, href: '/layanan/pengajuan?type=akta' },
        { label: 'Layanan Kartu Keluarga', icon: FileText, href: '/layanan/pengajuan?type=kk' },
        { label: 'Layanan KTP-el', icon: FileText, href: '/layanan/pengajuan?type=ktp' },
        { label: 'Identitas Anak (KIA)', icon: FileText, href: '/layanan/pengajuan?type=kia' },
        { label: 'Dispensasi Nikah', icon: FileText, href: '/layanan/pengajuan?type=nikah' },
      ]
    },
    {
      id: 'pengaduan',
      label: 'Layanan Pengaduan',
      type: 'dropdown',
      items: [
        { label: 'Pengaduan Pelayanan', icon: AlertTriangle, href: '/layanan/pengaduan?cat=pelayanan' },
        { label: 'Data Kependudukan', icon: AlertTriangle, href: '/layanan/pengaduan?cat=data' },
      ]
    },
    {
      id: 'pantau',
      label: 'Monitoring',
      type: 'link',
      items: [
        { label: 'Status Pengajuan', icon: Clock, href: '/layanan/status' },
        { label: 'Riwayat Layanan', icon: History, href: '/layanan/riwayat' },
      ]
    },
    {
      id: 'akun',
      label: 'Akun & Informasi',
      type: 'link',
      items: [
        { label: 'Profil Saya', icon: User, href: '/layanan/profil' },
        { label: 'Pusat Bantuan', icon: HelpCircle, href: '/layanan/bantuan' },
      ]
    }
  ]

  return (
    <div className="flex h-screen bg-desa-blue-50/30 dark:bg-desa-blue-950 transition-colors duration-500 overflow-hidden font-sans">
      {/* Sidebar Overlay (Mobile) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-desa-blue-950/20 backdrop-blur-md lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 flex flex-col h-screen bg-white dark:bg-desa-blue-950 border-r border-desa-blue-900/5 dark:border-white/5 transition-all duration-500 lg:sticky lg:top-0 lg:z-0 lg:translate-x-0 shrink-0 ${
          isSidebarOpen ? 'w-72 md:w-80' : 'w-20 lg:w-24'
        } ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Sidebar Header */}
        <div className="flex h-24 items-center px-6 md:px-8 border-b border-desa-blue-900/5 dark:border-white/5">
          <Link href="/" className={`flex items-center gap-4 transition-all hover:opacity-80 group ${!isSidebarOpen ? 'mx-auto' : ''}`}>
            <div className={`flex shrink-0 items-center justify-center bg-desa-blue-900 rounded-2xl p-2 shadow-xl shadow-desa-blue-900/20 transition-all duration-500 ${isSidebarOpen ? 'h-12 w-12' : 'h-11 w-11'}`}>
              <img src="/img/image.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
            {isSidebarOpen && (
              <div className="animate-in fade-in slide-in-from-left-2 duration-500 overflow-hidden">
                <h1 className="font-timeless text-lg font-black text-desa-blue-950 dark:text-white leading-none">SUKAHURIP</h1>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-desa-blue-900/40 dark:text-desa-yellow-500">Digital Portal</p>
              </div>
            )}
          </Link>
        </div>
        {/* Sidebar Menu */}
        <nav className={`flex-1 min-h-0 overflow-y-auto py-8 custom-scrollbar space-y-8 transition-all duration-500 overscroll-contain ${isSidebarOpen ? 'px-4' : 'px-2'}`}>
          {menuGroups.map((group) => (
            <div key={group.id} className="space-y-2">
              {isSidebarOpen ? (
                <button 
                  onClick={() => group.type === 'dropdown' && toggleGroup(group.id)}
                  className="group/header flex w-full items-center justify-between px-4 py-1 rounded-xl transition-all"
                >
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-desa-blue-950/20 dark:text-white/20 group-hover/header:text-desa-blue-900 dark:group-hover/header:text-desa-yellow-500 transition-colors">
                    {group.label}
                  </span>
                  {group.type === 'dropdown' && (
                    <ChevronLeft size={12} className={`text-desa-blue-950/20 dark:text-white/20 group-hover/header:text-desa-blue-900 dark:group-hover/header:text-desa-yellow-500 transition-transform duration-500 ${openGroups.includes(group.id) ? '-rotate-90' : ''}`} />
                  )}
                </button>
              ) : (
                <div className="h-px bg-desa-blue-900/10 dark:bg-white/10 my-6 mx-2" />
              )}
              
              <div className={`space-y-1.5 transition-all duration-700 ease-in-out overflow-hidden ${
                isSidebarOpen && group.type === 'dropdown' && !openGroups.includes(group.id) ? 'max-h-0 opacity-0' : 'max-h-[800px] opacity-100'
              }`}>
                {group.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        if (window.innerWidth < 1024) setIsMobileMenuOpen(false)
                      }}
                      className={`flex items-center gap-4 rounded-2xl py-3.5 text-sm font-bold transition-all duration-500 group/item ${
                        isSidebarOpen ? 'px-5' : 'justify-center px-0'
                      } ${
                        isActive 
                          ? 'bg-desa-blue-900 text-white shadow-xl shadow-desa-blue-900/20 dark:bg-desa-yellow-500 dark:text-desa-blue-950 dark:shadow-desa-yellow-500/10 active:scale-95' 
                          : 'text-desa-blue-950/40 dark:text-white/40 hover:bg-desa-blue-900/5 dark:hover:bg-white/10 hover:text-desa-blue-900 dark:hover:text-white hover:scale-[1.02] active:scale-95'
                      }`}
                    >
                      <item.icon size={isSidebarOpen ? 20 : 22} className={`shrink-0 transition-all duration-500 ${isActive ? 'scale-110' : 'group-hover/item:scale-110'}`} />
                      {isSidebarOpen && <span className="animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap text-xs">{item.label}</span>}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-desa-blue-900/5 dark:border-white/5 space-y-4">
          
          <button
            onClick={logout}
            className={`flex items-center gap-4 rounded-2xl bg-rose-50 dark:bg-rose-500/10 py-3.5 text-[10px] font-black uppercase tracking-widest text-rose-600 transition-all hover:bg-rose-600 hover:text-white group ${
              isSidebarOpen ? 'w-full px-5' : 'w-full justify-center px-0'
            }`}
          >
            <LogOut size={20} className="shrink-0 transition-transform group-hover:-translate-x-1" />
            {isSidebarOpen && <span className="animate-in fade-in duration-500">Keluar Sesi</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 md:h-24 flex items-center justify-between px-6 md:px-10 bg-white/80 dark:bg-desa-blue-900/40 backdrop-blur-xl border-b border-desa-blue-900/5 dark:border-white/5 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(true)
                } else {
                  setIsSidebarOpen(!isSidebarOpen)
                }
              }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-desa-blue-900/5 dark:bg-desa-yellow-500/10 text-desa-blue-900 dark:text-desa-yellow-500 active:scale-90 transition-all shadow-lg shadow-desa-blue-900/5 dark:shadow-desa-yellow-500/5 border border-desa-blue-900/10 dark:border-desa-yellow-500/20 group"
            >
              {isSidebarOpen ? (
                <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-0.5" />
              ) : (
                <Menu size={24} className="transition-transform group-hover:scale-110" />
              )}
            </button>
            <div className="flex flex-col">
              <h2 className="font-timeless text-lg md:text-2xl font-black text-desa-blue-950 dark:text-white leading-tight truncate max-w-[120px] sm:max-w-none">
                {menuGroups.flatMap(g => g.items).find(i => i.href === pathname)?.label || 'Portal Layanan'}
              </h2>
              <div className="hidden sm:flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-desa-blue-900/40 dark:text-desa-yellow-500 mt-0.5">
                Dashboard <ArrowRight size={10} /> {pathname.split('/').pop()}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button 
              onClick={toggleTheme}
              className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-desa-yellow-500 transition-all hover:scale-105 active:scale-95"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className={`relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl transition-all hover:scale-105 active:scale-95 ${
                  isNotificationOpen ? 'bg-desa-blue-900 text-white' : 'bg-desa-blue-50 dark:bg-white/5 text-desa-blue-900 dark:text-white'
                } border border-transparent ${isNotificationOpen ? '' : 'hover:border-desa-blue-900/10 dark:hover:border-white/10'}`}
              >
                <Bell size={18} className="md:size-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-rose-500 text-[7px] md:text-[8px] font-black text-white shadow-lg border-2 border-white dark:border-desa-blue-950">3</span>
              </button>
              
              {isNotificationOpen && (
                <div className="absolute right-0 mt-4 w-80 md:w-96 origin-top-right rounded-[32px] bg-white dark:bg-desa-blue-900 border border-desa-blue-900/5 dark:border-white/10 shadow-2xl p-6 z-50 animate-in fade-in zoom-in duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-timeless text-lg font-black text-desa-blue-950 dark:text-white">Notifikasi</h4>
                    <span className="bg-rose-50 dark:bg-rose-500/10 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-rose-600">3 Baru</span>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="group p-4 rounded-2xl bg-desa-blue-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-transparent hover:border-desa-blue-900/10 dark:hover:border-white/10 transition-all cursor-pointer">
                        <div className="flex gap-4">
                          <div className="h-10 w-10 shrink-0 rounded-xl bg-desa-blue-900 flex items-center justify-center text-white">
                            <FileText size={18} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-desa-blue-950 dark:text-white group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors">Pengajuan Surat Pindah</p>
                            <p className="text-[10px] text-desa-blue-950/40 dark:text-white/40 mt-1">Status pengajuan Anda telah berubah menjadi "Selesai".</p>
                            <p className="text-[8px] font-black text-desa-blue-900/20 dark:text-white/20 uppercase tracking-widest mt-2">2 Jam yang lalu</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/layanan/profil"
              className="flex h-10 md:h-14 items-center gap-4 bg-white dark:bg-white/5 px-2 md:px-5 rounded-2xl border border-desa-blue-900/5 dark:border-white/10 shadow-sm hover:bg-desa-blue-50 dark:hover:bg-white/10 transition-all active:scale-95 group"
            >
              <div className="hidden md:block text-right">
                <p className="text-sm font-black text-desa-blue-950 dark:text-white leading-none group-hover:text-desa-blue-900 dark:group-hover:text-desa-yellow-500 transition-colors whitespace-nowrap">{user.name}</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-desa-blue-900/40 dark:text-desa-yellow-500 mt-1.5">Warga Digital</p>
              </div>
              <div className="h-8 w-8 md:h-10 md:w-10 shrink-0 rounded-xl bg-desa-blue-900 dark:bg-desa-blue-500 flex items-center justify-center text-white font-black text-xs md:text-sm shadow-lg transition-transform group-hover:scale-105 overflow-hidden">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  user.name.charAt(0)
                )}
              </div>
            </Link>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-10 lg:p-12 overscroll-contain h-full">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Floating Theme Toggle (Mobile/Tablet Only) */}
        <button 
          onClick={toggleTheme}
          className="fixed bottom-10 left-6 z-40 flex sm:hidden h-14 w-14 items-center justify-center rounded-full bg-white/80 dark:bg-desa-blue-900/80 backdrop-blur-xl border border-desa-blue-900/10 dark:border-white/10 shadow-2xl text-desa-blue-900 dark:text-desa-yellow-500 active:scale-90 transition-all duration-500 group"
        >
          <div className="relative h-6 w-6">
            <Sun className={`absolute inset-0 transition-all duration-500 ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-0'}`} />
            <Moon className={`absolute inset-0 transition-all duration-500 ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}`} />
          </div>
          <span className="absolute -top-12 left-0 scale-0 group-hover:scale-100 transition-transform bg-desa-blue-950 text-white text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest pointer-events-none">
            {theme === 'light' ? 'Mode Malam' : 'Mode Terang'}
          </span>
        </button>
      </div>
    </div>
  )
}
