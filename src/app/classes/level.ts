export const levels = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhuman'] as const;
export type LevelValue = typeof levels[number];
