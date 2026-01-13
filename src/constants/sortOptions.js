import { SortType } from '../types/enums';

export const SORT_OPTIONS = [
  { value: SortType.NONE, label: 'Sin orden', tip: 'Mantiene el orden original de aparición' },
  { value: SortType.ALPHABETICAL, label: 'Alfabético', tip: 'Orden A–Z / 0–9' },
  { value: SortType.ASCII, label: 'ASCII', tip: 'Orden basado en código de caracteres ASCII' },
  { value: SortType.REVERSE, label: 'Inverso', tip: 'Orden Z–A / 9–0' }
];