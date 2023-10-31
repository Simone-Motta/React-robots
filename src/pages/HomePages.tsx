import UserCard from '../components/UserCard';
import { useUsers } from '../hooks/useUsers'

const HomePage = () => {
    const { users, isLoading } = useUsers();
    if (isLoading) {
        //Mentre carica vedrò:
        return <p>Loading ...</p>
    }
    //Quando avrà caricato:
    return <div>
        <h1>Robot Users</h1>
        {users.map((u, index) => {
            //Visualizzerò una card per user iterando nell'array u(user) grazie a key={index}
            return <UserCard key={index} user={u} detailPath={"/detail/" + index}/>
        })}
    </div>
}

export default HomePage