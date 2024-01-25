import type {ReactNode } from 'react'
type ChildProps = {
    name: string,
    children? : ReactNode
}
// const  Child: React.FC<ChildProps> = ( { name } : ChildProps ) => {
//   return (
//     <div>{name }</div>
//   )
// }
function  Child( { name, children } : ChildProps ) {
  return (
    <div>{name }, children - {children}</div>
  )
}

export default Child