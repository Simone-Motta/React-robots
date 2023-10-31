import { useState } from "react"
import { useEffect } from "react"
import { UserType } from "../repo/users.types";
import { getUsers } from "../repo";

export const useUsers = () => {

    /*Spazio di memoria in cui dichiarare l'API se sta caricando o meno
    N.B.: inizialmente è true */
    const [isLoading, setIsLoading] = useState<boolean>(true)

    /*Spazio di memoria in cui caricare gli utenti ricevuti tramite API
    N.B.: inizialmente è un array vuoto */
    const [users, setUsers] = useState<UserType[]>([])

    /*Il seguente useEffect carica la lista degli utenti all'avvio del componente */
    useEffect(() => {
        getUsers().then((usersR) => {
            setUsers(usersR)  //Salvo la risposta nello state 
            setIsLoading(false)  //Imposto isLoading a false perchè il caricamento è terminato
        })
    }, []);  //Mount (perchè l'array è vuoto)

    return { users, isLoading }  //Ritorno un oggetto con le info che servono alla vista

}