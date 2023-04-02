export type ContainerProps = {
    styles: React.CSSProperties
}
export type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export type ButtonProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement>,id: number) => void
}
export type PersonListProps = {
    name:{
        first: string,
        last: string
    }[]
}
export type PersonProps = {
    name: {
        first: string,
        last: string,
    }
}
export type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,
}