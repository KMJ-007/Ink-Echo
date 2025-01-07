export function parseDate(dateStr: string): Date {
  const months: { [key: string]: number } = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  
  // Parse "8th Jan 25" format
  const [day, month, year] = dateStr.split(' ');
  const numericDay = parseInt(day);
  const monthIndex = months[month.slice(0, 3)];
  const fullYear = 2000 + parseInt(year); // Convert "25" to "2025"
  
  return new Date(fullYear, monthIndex, numericDay);
}