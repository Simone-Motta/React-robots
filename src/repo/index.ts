import { UserType } from "./users.types";

/**
 * Richiesta API
 */
const URL = "https://random-data-api.com/api/users/random_user?size=10"

export const getUsers = async (): Promise<UserType[]> => {  //Promise<UserType[]> tipizzazzione risposta
    const res: Response = await fetch(URL);  //Estraiamo la risposta 
    //Se la risposta ha status 200
    if (res.status === 200) {
        const data = (await res.json()) as UserType[];  //Gestiamo la risposta e tipizziamo json
        return data;
    }
    return [];
};