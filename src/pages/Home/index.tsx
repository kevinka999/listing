import { useEffect, useState } from "react";
import { List } from "../../components";
import { User } from "../../types";
import api from "../../services/api";

const Home: React.FC = () => {
    const [userList, setUserList] = useState<User[] | null>(null);

    useEffect(() => fetchData(), [])

    function fetchData() {
        api.get({url: "https://randomuser.me/api/?results=10"})
            .then((data: any) => {
                const userList: User[] = data.results
                setUserList(userList)
            })
            .catch(() => {
                throw new Error("Something unexpected happened")
            })
    }

    return (
        <div>
            {userList && (
                <List data={userList} />
            )}
        </div>
    )
}

export default Home;