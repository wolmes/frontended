import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {PersonInfoCard} from "./components/PersonInfoCard/PersonInfoCard.tsx";
import {getPersonInfo} from "./http/http.ts";
import {PersonInfoCardProps} from "./types/type";

const App = () => {
    const [personInfo, setPersonInfo] = useState<PersonInfoCardProps>({
        personName: "",
        avatarUrl: "",
        country: [],
        "description": "",
        "tagList": []
    })
    useEffect(() => {
        getPersonInfo().then(personInfoData => {
            console.log(personInfoData)
            setPersonInfo(personInfoData)
        })
    }, []);
    return (
        <>

            <PersonInfoCard tagList={personInfo.tagList}
                            avatarUrl={personInfo.avatarUrl}
                            personName={personInfo.personName}
                            country={personInfo.country}
                            description={personInfo.description}/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
