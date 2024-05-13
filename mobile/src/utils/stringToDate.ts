export const stringToDate = (date: string) => {
  const [year, month, day] = date.split('-');
  const data = new Date(Number(year), Number(month) - 1, Number(day));

  //transforma a data para o formato dd/mm/yyyy
  return data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}

export const formatDate = (dateString: Date) => {
  // Converte a string para o formato Date
  const date = new Date(dateString);

  //transforma a data para o formato yyyy-mm-dd
  const formatterdDate = date.toISOString().slice(0, 10);

  return formatterdDate;
}
