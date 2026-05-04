// ============================================================================
// TAB & HERO TYPES (from existing config)
// ============================================================================

export type InfografisKey =
  | 'penduduk'
  | 'apbdes'
  | 'stunting'
  | 'bansos'
  | 'idm'
  | 'sdgs'

export interface InfografisTab {
  key: InfografisKey
  label: string
}

export interface HeroContent {
  eyebrow: string
  titleLines: [string, string, string]
  description: string
  stats: Array<{
    label: string
    value: string
  }>
  quoteName: string
  quoteRole: string
  quoteText: string
}

// ============================================================================
// PENDUDUK/DEMOGRAFI SECTION TYPES
// ============================================================================

export interface DemografiCard {
  label: string
  value: string
  unit: string
  icon: string
}

export interface PendudukSectionContent {
  title: string
  description: string
  cards: DemografiCard[]
}

// ============================================================================
// APBDES SECTION TYPES
// ============================================================================

export interface ApbdesStatistic {
  label: string
  value: string
}

export interface ApbdesSectionContent {
  title: string
  description: string
  statistics: ApbdesStatistic[]
}

// ============================================================================
// BANSOS SECTION TYPES
// ============================================================================

export interface BansosIndicator {
  label: string
  value: string
  description: string
  color: string
}

export interface BansosAllocation {
  label: string
  value: string
  description: string
  unit: string
  color: string
}

export interface BansosDistributionData {
  dusun: string
  keluarga: number
  alokasi: string
}

export interface BansosBenefitType {
  name: string
  count: string
  color: string
}

export interface BansosSectionContent {
  title: string
  description: string
  indicators: BansosIndicator[]
  summaries: BansosAllocation[]
  distributions: BansosDistributionData[]
  benefitTypes: BansosBenefitType[]
}

// ============================================================================
// STUNTING SECTION TYPES
// ============================================================================

export interface StuntingIndicator {
  label: string
  value: string
  description: string
  icon?: string
  color?: string
}

export interface StuntingPrevalenceData {
  ageGroup: string
  percentage?: number
  targetPercentage?: string
  count: string
  description?: string
}

export interface StuntingTrendData {
  year: string
  prevalence: number
  intervention?: number
}

export interface StuntingProgramData {
  name: string
  coverage: number
  description: string
  target: string
  icon?: string
  color?: string
}

export interface StuntingSectionContent {
  title: string
  description: string
  indicators: StuntingIndicator[]
  prevalenceByAge?: StuntingPrevalenceData[]
  trendData?: StuntingTrendData[]
  programs?: StuntingProgramData[]
}

// ============================================================================
// IDM SECTION TYPES
// ============================================================================

export interface IdmTrend {
  year: number
  score: number
}

export interface IdmDimension {
  name: string
  score: number
  fullScore: number
  color: string
}

export interface IdmIndicator {
  label: string
  value: string
  icon?: string
}

export interface IdmSectionContent {
  title: string
  description: string
  villageName: string
  district: string
  regency: string
  year: number
  currentScore: number
  status: string
  statusColor: string
  indicators: IdmIndicator[]
  dimensions: IdmDimension[]
  trends: IdmTrend[]
  interpretation: string
  source: string
}

// ============================================================================
// SDGS SECTION TYPES
// ============================================================================

export interface SdgsGoalIndicator {
  name: string
  value: string
  status: 'Baik' | 'Cukup' | 'Kurang'
}

export interface SdgsGoal {
  id: number
  title: string
  score: number
  status: 'Tercapai' | 'Berkembang' | 'Belum Tercapai'
  color: string
  image: string
  description: string
  indicators: SdgsGoalIndicator[]
}

export interface SdgsProgram {
  name: string
  goalId: number
  status: string
}

export interface SdgsSectionContent {
  title: string
  description: string
  villageName: string
  district: string
  regency: string
  year: number
  overallScore: number
  goals: SdgsGoal[]
  insights: {
    strengths: string[]
    challenges: string[]
  }
  programs: SdgsProgram[]
  source: string
}

// ============================================================================
// UI COMPONENT TYPES
// ============================================================================

export interface TabButtonProps {
  item: InfografisTab
  active: boolean
  onClick: (key: InfografisKey) => void
}

export interface DemografiCardProps {
  label: string
  value: string
  unit: string
  icon: string
}

export interface SectionHeaderProps {
  title: string | string[]
  description: string
  showInfoButton?: boolean
  icon?: any
  delay?: number
}

export interface StatPillProps {
  label: string
  value: string
}

export interface MiniMetricProps {
  label: string
  value: string
}
