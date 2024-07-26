export enum IconName {
  FAVORITES_FILLED,
  FAVORITES_OUTLINED,
  SEARCH,
}

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  color?: string;
}
