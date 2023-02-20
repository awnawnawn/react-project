export declare type ColorValue = 'white' | 'blue' | 'green' | 'red' | 'yellow' | 'gray'
export declare type SizeValue = 'then' | 'big'

export declare interface Color {
  [key: ColorValue | string]: string
}


export declare interface Props {
  to?: string,
  onClick?: Function,
  children?: any,
  color?: ColorValue,
  size?: SizeValue
}