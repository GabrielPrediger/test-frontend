export interface TopClient {
  id: number;
  name: string;
  email: string;
}

export interface TopClientsStats {
  topClientByVolume: (TopClient & { totalVolume: number }) | null;
  topClientByAverage: (TopClient & { averageSaleValue: number }) | null;
  topClientByFrequency: (TopClient & { uniqueSaleDays: number }) | null;
}
