import {PersonInfoProps} from "../../types/type";
import './PersonInfo.css'
export const PersonInfo = (personInfoProp: PersonInfoProps) => {
    return (
        <div className={"person-info-container"}>
            <img src={personInfoProp.avatarUrl} alt=""/>
            <h1 className={"person-name"}>{personInfoProp.personName}</h1>
            <p className={"country"}>{personInfoProp.country.join(', ')}</p>

            <p className={"description"}>"{personInfoProp.description}"</p>
        </div>
    );
};