export type WBlock = {
  /** grid column, 0..4 */
  x: number;
  /** grid row, 0..4 */
  y: number;
  /** the two acid-lime pixels from the logo */
  accent?: boolean;
};

/**
 * The "W" mark, mapped from the 02 Pixel W logo:
 * two 4-block arms, two lime pixels in the middle, two feet.
 */
export const W_BLOCKS: WBlock[] = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 0, y: 3 },
  { x: 4, y: 0 },
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 2, y: 2, accent: true },
  { x: 2, y: 3, accent: true },
  { x: 1, y: 4 },
  { x: 3, y: 4 },
];
