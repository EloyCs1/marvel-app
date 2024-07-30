export enum IconName {
  FAVORITES_FILLED,
  FAVORITES_OUTLINED,
  SEARCH,
  SPINNER,
}

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
