import {ReactNode} from "react";
import './BaseCard.css'

export const BaseCard = ({children}: {children: ReactNode}) => {
    return (
        <div className={"base-card-container"}>
            {children}
        </div>
    );
};