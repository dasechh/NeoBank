export function getAge(dateString: string): number {
  const birthday = new Date(dateString);

  if (Number.isNaN(birthday.getTime())) {
    return NaN;
  }

  const today = new Date();

  if (birthday > today) {
    return NaN;
  }

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return age;
}
