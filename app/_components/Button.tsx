import type {ReactNode, ComponentProps} from 'react'
import Child from './Child'
type ButtonProps = { 
    outline?: boolean,
    // children?: ReactNode,
} & ComponentProps<"button">
// & ComponentProps<typeof Child>
// & ComponentProps<"button">
function Button({ outline, ...props } : ButtonProps) {
  return (
    <button style={{
        border: outline ? "1px solid red" : undefined
    }} {...props}>{props.children}</button>
  )
}

export default Button