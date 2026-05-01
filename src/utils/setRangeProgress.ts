export function setRangeProgress(input: HTMLInputElement) {
  input.classList.contains('');
  const min = Number(input.min) || 0;
  const max = Number(input.max) || 100;
  const val = Number(input.value);

  const percent = ((val - min) / (max - min)) * 100;
  input.style.setProperty('--progress', percent + '%');
}
