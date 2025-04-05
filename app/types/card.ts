export interface CardData {
  id: string;
  title: string;
  subtitle?: string;
  marketCap?: string;
  liquidity?: string;
  volume?: string;
  transactions?: string;
  percentageChange?: string;
  orientation?: 'horizontal' | 'vertical';
}