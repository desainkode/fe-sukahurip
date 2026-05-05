'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { SubmissionForm } from '@/features/layanan/components/SubmissionForm'

function PengajuanContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'pindah' // default to pindah if not found

  return <SubmissionForm serviceSlug={type} />
}

export default function PengajuanPage() {
  return (
    <div className="animate-in fade-in duration-1000 pb-20">
      <Suspense fallback={
        <div className="flex h-64 items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-desa-blue-900 border-t-transparent" />
        </div>
      }>
        <PengajuanContent />
      </Suspense>
    </div>
  )
}
