'use client'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import type { StuntingTrendData } from '../../types/infografis'

interface StuntingTrendChartProps {
    data: StuntingTrendData[]
}

export function StuntingTrendChart({ data }: StuntingTrendChartProps) {
    return (
        <div className="rounded-3xl bg-white p-6">
            <h3 className="mb-6 text-xl font-bold text-[#000418]">Tren Stunting & Intervensi</h3>
            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis
                        dataKey="month"
                        stroke="#000418"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis
                        stroke="#000418"
                        style={{ fontSize: '12px' }}
                        label={{ value: 'Persentase (%)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '8px'
                        }}
                        formatter={(value) => `${value}%`}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="prevalence"
                        stroke="#D32F2F"
                        strokeWidth={2}
                        dot={{ fill: '#D32F2F', r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Prevalensi Stunting"
                    />
                    <Line
                        type="monotone"
                        dataKey="intervention"
                        stroke="#0021B3"
                        strokeWidth={2}
                        dot={{ fill: '#0021B3', r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Cakupan Intervensi"
                    />
                </LineChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-[#FFE0E0] bg-[#FFF5F5] p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#D32F2F]">Prevalensi Stunting</p>
                    <p className="mt-2 text-2xl font-bold text-[#D32F2F]">{data[data.length - 1]?.prevalence}%</p>
                    <p className="mt-1 text-xs text-[#999]">Target: 14% (Rencana 2024)</p>
                </div>
                <div className="rounded-lg border border-[#CED6FA] bg-[#F0F3FF] p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#0021B3]">Cakupan Intervensi</p>
                    <p className="mt-2 text-2xl font-bold text-[#0021B3]">{data[data.length - 1]?.intervention}%</p>
                    <p className="mt-1 text-xs text-[#999]">Target: 100%</p>
                </div>
            </div>
        </div>
    )
}
