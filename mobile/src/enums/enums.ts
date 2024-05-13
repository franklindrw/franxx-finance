export const activityEnum = {
  alimentacao: 'Alimentação',
  servicos: 'Serviços',
  moradia: 'Moradia',
  trabalho: 'Trabalho',
} as const;

export type ActivityEnum = typeof activityEnum[keyof typeof activityEnum];

export const typeValueEnum = {
  cartao: 'Cartão de Crédito',
  dinheiro: 'Dinheiro',
} as const;

export type TypeValueEnum = typeof typeValueEnum[keyof typeof typeValueEnum];
