import {PersonInfo} from "../PersonInfo/PersonInfo.tsx";
import {CardTag} from "../CardTag/CardTag.tsx";
import {BaseCard} from "../BaseCard/BaseCard.tsx";
import {PersonInfoCardProps} from "../../types/type";

export const PersonInfoCard = (props: PersonInfoCardProps) => {

    return (
        <>
            <BaseCard>
                <PersonInfo avatarUrl={props.avatarUrl}
                            personName={props.personName}
                            country={props.country}
                            description={props.description}/>

                {props.tagList
                    .map(tag => {
                        return (
                            <CardTag>
                                {tag}
                            </CardTag>
                        )
                    })}
            </BaseCard>
        </>
    );
};