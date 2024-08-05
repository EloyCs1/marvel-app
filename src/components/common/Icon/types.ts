export enum IconName {
  FAVORITES_FILLED,
  FAVORITES_OUTLINED,
  SEARCH,
  SPINNER,
  MARVEL_LOGO,
}

export interface IconProps {
  testId?: string;
  name: IconName;
  width?: number;
  height?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
