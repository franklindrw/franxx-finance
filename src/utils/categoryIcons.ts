import { 
  Beef,
  Hammer,
  Warehouse,
  Briefcase,
  PiggyBank,
  Handshake,
  Axe,
  Plus,
  BookMarked,
  Heart,
  Car,
  TreePalm,
} from 'lucide-react-native';

export const categoryIcons = {
  alimentacao: Beef,
  moradia: Warehouse,
  trabalho: Briefcase,
  servicos: Hammer,
  dinheiro: PiggyBank,
  extra: Axe,
  dirty: Handshake,
  others: Plus,
  educacao: BookMarked,
  saude: Heart,
  transporte: Car,
  lazer: TreePalm,
} as const;

export type CategoryIcons = keyof typeof categoryIcons;
