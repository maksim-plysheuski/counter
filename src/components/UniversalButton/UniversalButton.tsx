type PropsType = {
    name: string
    counterValue: number | string
    settingsValues?: Array<number>
    callBack: () => void
    isDisabled: boolean
}

export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return <button disabled={props.isDisabled}
                   className={props.isDisabled ? "error" : ""}
                   onClick={onClickHandler}>{props.name}</button>
}