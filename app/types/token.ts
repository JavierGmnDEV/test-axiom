export interface Token {
  id: string;
  icon: string;
  name: string;
  fullName: string;
  time: string;
  marketCap: string;
  marketCapChange: string;
  liquidity: string;
  volume: string;
  txns: {
    total: string;
    buys: string;
    sells: string;
  };
  status: 'paid' | 'unpaid';
  priceChange: string;
}