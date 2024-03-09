import {CardTagProps} from "../../types/type";
import './CardTag.css'

export const CardTag = (props: CardTagProps) => (
    <div className={"tag-container"}>
        {props.children}
    </div>
)