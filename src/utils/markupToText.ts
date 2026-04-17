export function markupToText(markup: string): string | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(markup, 'text/html');
  const text = doc.body.textContent || '';
  return text.trim() || null;
}
