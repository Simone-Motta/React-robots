//Creazione Componente

import { useState } from "react"
import { UserType } from "../repo/users.types"
import './UserCard.scss'
import { Link } from "react-router-dom"

/*Tipizzazione specifica per la card, non essendo utilizzata da altre parti
viene integrata nel file del componente*/
type UserCardType = {
    user: UserType,
    detailPath: string
}

const UserCard = ({user, detailPath}: UserCardType) => {

    const [expanded, setExpanded] = useState<boolean>(false)

    /*Destrutturando l'oggetto user, per estrarre le chiavi da utilizzare 
    N.B.: ci permette di evitare di usare la dot notation (user.first_name)*/
    const {
        first_name,
        last_name,
        email,
        avatar,
        gender,
        date_of_birth
    } = user

    return <div className="user-card p-[20px]">
        <div className="div-center">
            <img src={avatar} alt={`${first_name} ${last_name} avatar`}/>
                <button onClick={() => setExpanded(!expanded)}>i</button>      
        </div>
        <h2>{first_name} {last_name}</h2>
        {expanded && <h3>{`(${date_of_birth})`}</h3>}
        {expanded && <h3><a href={`mailto:${email}`}>{email}</a></h3>}       
        {expanded && <h3>{gender}</h3>}
        {expanded && <Link to={detailPath}><button>More</button></Link>}
    </div>
}

export default UserCard