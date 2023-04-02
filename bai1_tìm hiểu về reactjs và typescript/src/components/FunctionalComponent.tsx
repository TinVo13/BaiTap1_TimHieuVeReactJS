import React from 'react'

type Hello = {
    name: string
}
//react functional component
// export default function FunctionalComponent(props: Hello) {
//   return (
//     <div>Hello, {props.name}</div>
//   )
// }
//react arrow function component
export const FunctionalComponent = (props: Hello) => {
    return (
        <div>Hello, {props.name}</div>
    )
}

