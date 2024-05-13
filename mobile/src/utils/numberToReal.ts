export const numberToReal = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const moneyToNumber = (value: string) => {
  return parseFloat(value.replace("R$", "").replace(",", "."));
}
