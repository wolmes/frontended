import {PersonInfoCardProps} from "../types/type";

export const getPersonInfo: () => Promise<PersonInfoCardProps> = async () => {
    return fetch("./datas/mock_data.json")
        .then(res => res.json())
}