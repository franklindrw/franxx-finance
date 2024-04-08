export const stringToDate = (date: string) => {
  const [year, month, day] = date.split('-');
  const data = new Date(Number(year), Number(month) - 1, Number(day));

  //transforma a data para o formato dd/mm/yyyy
  return data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}