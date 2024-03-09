import {ReactNode} from "react";

export type CardTagProps = {
    children: ReactNode
}


export interface PersonInfoProps{
    avatarUrl: string,
    personName: string,
    country: Array<string>,
    description: string
}

export interface PersonInfoCardProps extends PersonInfoProps{
    tagList: Array<string>
}