export function parseDate(dateStr: string): Date {
  const months: { [key: string]: number } = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  
  const [day, month] = dateStr.split(' ');
  const numericDay = parseInt(day);
  const monthIndex = months[month.slice(0, 3)];
  
  return new Date(2024, monthIndex, numericDay);
}