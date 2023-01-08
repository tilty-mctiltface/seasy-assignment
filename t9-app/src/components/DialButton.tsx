import { FunctionComponent } from "react"
import { DialButtonProps } from "../types"

export const DialButton: FunctionComponent<DialButtonProps> = (dialButton) => {
    return (
        <div className='border border-solid border-black w-20' onClick={dialButton.onPress}>
            <p className='font-bold'>{dialButton.num}</p>
            <p className='text-xs'>{dialButton.characters.join(', ')}</p>
        </div>
    )
}