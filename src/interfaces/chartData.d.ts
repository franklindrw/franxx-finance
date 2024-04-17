interface Dataset {
  data: number[];
}

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}
