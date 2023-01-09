import { FunctionComponent } from "react"
import { DialButtonProps } from "../types"

export const DialButton: FunctionComponent<DialButtonProps> = (dialButton) => {
    return (
        <div className='button w-20 h-16 flex flex-col items-center p-2' onClick={dialButton.onPress}>
            <p className='font-bold'>{dialButton.num}</p>
            <p className='text-xs'>{dialButton.characters.join(', ')}</p>
        </div>
    )
}