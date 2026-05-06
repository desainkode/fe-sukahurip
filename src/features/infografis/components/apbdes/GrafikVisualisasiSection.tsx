"use client";

import * as React from 'react';
import { PieChartIcon, ArrowUpRight, BarChart3 } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { SectionHeader } from '../../../home/components/ui/SectionHeader';

// Data Simulasi Pendapatan
const pendapatanData = [
  { sumber: 'dd', label: 'Dana Desa', value: 45 },
  { sumber: 'add', label: 'Alokasi Dana Desa', value: 30 },
  { sumber: 'pad', label: 'Pendapatan Asli Desa', value: 15 },
  { sumber: 'banprov', label: 'Bantuan Provinsi', value: 10 },
];

const pieConfig = {
  dd: { label: 'Dana Desa', color: '#a2d6f9' },
  add: { label: 'Alokasi Dana Desa', color: '#FFC400' },
  pad: { label: 'Pendapatan Asli', color: '#FFFFFF' },
  banprov: { label: 'Bantuan Provinsi', color: '#2C4CDB' },
} satisfies ChartConfig;

// Data Simulasi Belanja
const belanjaData = [
  { bidang: 'Pembangunan', total: 400000000 },
  { bidang: 'Pemerintahan', total: 300000000 },
  { bidang: 'Pembinaan', total: 100000000 },
  { bidang: 'Pemberdayaan', total: 100000000 },
  { bidang: 'Bencana', total: 100000000 },
];

const barConfig = {
  total: { label: 'Belanja', color: '#a2d6f9' },
} satisfies ChartConfig;

export function GrafikVisualisasiSection() {
  const totalPieValue = React.useMemo(() => {
    return pendapatanData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <SectionHeader 
        title={["Grafik &", "Visualisasi"]}
        description="Diagram interaktif yang menyajikan porsi sumber pendapatan dan alokasi belanja desa agar ringkasan APBDes lebih mudah dipahami oleh seluruh warga masyarakat."
        showInfoButton
        icon={PieChartIcon}
      />

      {/* Charts Grid */}
      <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-2">
        
        {/* PIE CHART (PENDAPATAN) */}
        <article
          className="hero-reveal group relative flex flex-col overflow-hidden rounded-[24px] border border-[#000418]/10 bg-linear-to-br from-[#000418] to-[#151E49] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.2)] sm:p-8"
          style={{ animationDelay: '300ms' }}
        >
          <div className="absolute inset-4 sm:inset-5 rounded-2xl border border-white/10 bg-linear-to-b from-white/10 via-white/5 to-transparent backdrop-blur-[2px]" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-timeless text-[20px] font-bold text-white sm:text-[24px]">
                Pendapatan Desa
              </h3>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
                <ArrowUpRight size={24} />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[240px] aspect-square sm:max-w-[280px]">
              <div className="absolute inset-0 rounded-full bg-[#a2d6f9]/10 blur-3xl" />
              <ChartContainer config={pieConfig} className="mx-auto h-full w-full">
                <PieChart>
                  <defs>
                    {pendapatanData.map((item) => (
                      <linearGradient
                        key={`grad-${item.sumber}`}
                        id={`grad-${item.sumber}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            pieConfig[item.sumber as keyof typeof pieConfig]?.color
                          }
                          stopOpacity={1}
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            pieConfig[item.sumber as keyof typeof pieConfig]?.color
                          }
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                    ))}
                  </defs>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        hideLabel
                        className="rounded-xl border-white/20 bg-black/90 text-white backdrop-blur-xl"
                      />
                    }
                  />
                  <Pie
                    data={pendapatanData}
                    dataKey="value"
                    nameKey="sumber"
                    innerRadius="65%"
                    outerRadius="90%"
                    strokeWidth={4}
                    stroke="rgba(255,255,255,0.05)"
                    paddingAngle={6}
                    cornerRadius={6}
                  >
                    {pendapatanData.map((entry) => (
                      <Cell
                        key={entry.sumber}
                        fill={`url(#grad-${entry.sumber})`}
                        className="transition-all duration-500 hover:opacity-80"
                      />
                    ))}
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-white text-3xl font-bold sm:text-4xl"
                                style={{ fontFamily: 'var(--font-timeless)' }}
                              >
                                {totalPieValue}%
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 22}
                                className="fill-white/50 text-[9px] font-bold uppercase tracking-[0.3em] sm:text-[10px]"
                              >
                                TOTAL
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </div>

            {/* Structured 2x2 Grid Legend for Mobile */}
            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-3 sm:mt-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
              {pendapatanData.map((item) => (
                <div
                  key={item.sumber}
                  className="group/legend relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-all duration-300 hover:bg-white/15 sm:flex-row sm:items-center sm:rounded-full sm:py-2 sm:pl-3 sm:pr-4"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover/legend:scale-110"
                      style={{
                        backgroundColor:
                          pieConfig[item.sumber as keyof typeof pieConfig]?.color,
                      }}
                    />
                    <span className="truncate font-timeless text-[11px] font-bold text-white/90 sm:text-[12px]">
                      {item.label}
                    </span>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-2 sm:mt-0 sm:border-t-0 sm:pt-0">
                    <span className="font-timeless text-[14px] font-black text-[#a2d6f9] sm:text-[15px]">
                      {item.value}%
                    </span>
                    <ArrowUpRight size={12} className="text-white/20 sm:hidden" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* BAR CHART (BELANJA) */}
        <article
          className="hero-reveal group relative flex flex-col overflow-hidden rounded-[24px] bg-linear-to-b from-[#FFFFFF] to-[#000418] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.15)] sm:p-8"
          style={{ animationDelay: '400ms' }}
        >
          <div className="absolute inset-4 sm:inset-5 rounded-2xl border border-white/10 bg-linear-to-b from-white/20 via-white/12 to-[#000418]/18 backdrop-blur-[2px]" />

          <div className="relative z-10 flex flex-1 flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-timeless text-[20px] font-bold text-[#000418] sm:text-[24px]">
                Belanja Desa
              </h3>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-[#000418] backdrop-blur-sm">
                <BarChart3 size={24} />
              </div>
            </div>

            <div className="min-h-[300px] flex-1">
              <ChartContainer
                config={barConfig}
                className="h-[300px] w-full max-w-none !aspect-auto"
              >
                <BarChart
                  accessibilityLayer
                  data={belanjaData}
                  layout="vertical"
                  margin={{ top: 8, right: 24, left: 0, bottom: 8 }}
                  barGap={2}
                  barCategoryGap={16}
                >
                  <defs>
                    <linearGradient id="belanja-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#072ac8" />
                      <stop offset="56%" stopColor="#5666AD" />
                      <stop offset="100%" stopColor="#FFC400" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid horizontal={false} vertical={false} />
                  <YAxis
                    dataKey="bidang"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    width={85}
                    tickMargin={4}
                    tick={{
                      fill: '#000000',
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: 'var(--font-timeless), Georgia, serif',
                    }}
                  />
                  <XAxis type="number" hide />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        indicator="line"
                        formatter={(value) => {
                          const formattedValue = new Intl.NumberFormat('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                            maximumFractionDigits: 0,
                          }).format(value as number);
                          return (
                            <div className="flex w-full items-center justify-between gap-4">
                              <span className="text-[#111316]">Jumlah</span>
                              <span className="font-semibold text-[#111316]">
                                {formattedValue}
                              </span>
                            </div>
                          );
                        }}
                      />
                    }
                  />
                  <Bar
                    dataKey="total"
                    fill="url(#belanja-gradient)"
                    radius={[0, 6, 6, 0]}
                    barSize={20}
                    isAnimationActive
                    animationDuration={1100}
                    animationBegin={120}
                    animationEasing="ease-out"
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
