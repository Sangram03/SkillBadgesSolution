export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface Solution {
  id: string;
  badgeName: string;
  solution: string;
  code?: string;
  addedBy: string;
  dateAdded: string;
  difficulty: DifficultyLevel;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface AdminPanelProps {
  onAddSolution: (solution: Omit<Solution, 'id' | 'dateAdded'>) => void;
}

export interface CodeDisplayProps {
  code: string;
  language: string;
}

export interface DifficultyBadgeProps {
  difficulty: DifficultyLevel;
}