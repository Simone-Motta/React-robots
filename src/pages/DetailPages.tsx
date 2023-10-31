import { useParams } from "react-router-dom"
import { useUsers } from '../hooks/useUsers'
import { useEffect } from "react";
import { useState } from "react";
import { UserType } from "../repo/users.types";

const DetailPage = () => {
    const { users, isLoading } = useUsers();
    const {id} = useParams()
    const [user, setUser] = useState<UserType>()
    useEffect(() => {
        try {
            let idNumber : number;
            if (id) {
                //Converto id in numero e salvo il valore all'indice id con setUser
                idNumber = parseInt(id)
                //
                setUser(users[idNumber])
            }
        } catch (error) {
            console.error(error)
        }
    }, [id, isLoading])

    return <div>
        <img src={user?.avatar} alt={`${user?.first_name} ${user?.last_name} avatar`}/>
        <h2>{user?.first_name} {user?.last_name} id: {user?.id}</h2>
        <p>{user?.date_of_birth}</p>
        <p>Gender: {user?.gender}</p>
        <p>Occupation: {user?.employment.title}</p>
    </div>

}

export default DetailPage