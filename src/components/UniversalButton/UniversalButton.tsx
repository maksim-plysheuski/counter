import {useState} from "react";

type PropsType = {
    name: string
    counterValue: number
    callBack: () => void
}

export const Button = (props: PropsType) => {
    const [isDisabled, setDisabled] = useState<boolean>(false)

    const onClickHandler = () => {
        props.callBack()
    }
    const buttonClass = props.counterValue === 5 || props.counterValue === 0 ? "redButton" : ""

    return <button className={buttonClass} onClick={onClickHandler}>{props.name}</button>
}