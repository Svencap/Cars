export type Filter = {
  offset?: number;
  limit?: number;
  brand?: string;
  color?: string;
};

export type CarOnFront = {
  title: string;
  image: string;
  brand: string;
  model: string;
  color: string;
  year: string;
  engineType: string;
  transmisson: "Автоматическая" | "Ручная" | "Роботизированная";
  powerReserve: string;
};
