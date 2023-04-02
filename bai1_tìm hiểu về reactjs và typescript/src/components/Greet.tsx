import { GreetProps } from "./Types"
export const Greet = (props:GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : 
            `Welcome Guest`
        }
    </div>
  )
}
