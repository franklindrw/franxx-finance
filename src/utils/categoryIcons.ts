import { 
  Beef,
  Hammer,
  Warehouse,
  Briefcase,
  PiggyBank,
  Handshake,
  Axe,
  Cross,
  BookMarked,
  Heart,
  Car
} from 'lucide-react-native';

export const categoryIcons = {
  alimentacao: Beef,
  moradia: Warehouse,
  trabalho: Briefcase,
  servicos: Hammer,
  dinheiro: PiggyBank,
  extra: Axe,
  dirty: Handshake,
  others: Cross,
  educacao: BookMarked,
  saude: Heart,
  transporte: Car,
} as const;

export type CategoryIcons = keyof typeof categoryIcons;
