import type { Props, ColorValue, Color, SizeValue } from "./type"
import type { ElementProps } from "../../types/element.type"


function getColor(color: ColorValue): string {
  const colorConfig: Color = {
    'white': 'bg-white',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'red': 'bg-red-500',
    'yellow': 'bg-yellow-500',
    'gray': 'bg-gray-500',
  }

  return colorConfig[color]
}


function Link({ to: link, onClick, children, color, className }: ElementProps & Props) {
  return (
    <a
      href={link}
      className={`p-2 rounded ${getColor((color || 'white'))} ${className}`}
      onClick={onClick}
    >{children}</a>
  )
}


function Button({ onClick, children, color, className }: ElementProps & Props) {

  return (
    <button
      className={`p-2 rounded ${getColor((color || 'white'))} ${className}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default function (props: Props & ElementProps) {

  return props.to ?
    <Link
      to={props.to}
      color={props.color}
      onClick={props.onClick}
      className={props.className}
      children={props.children}
    /> :
    <Button
      color={props.color}
      className={props.className}
      onClick={props.onClick}
      children={props.children}
    />
}