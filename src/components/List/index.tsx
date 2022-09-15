import { User } from "../../types";

interface IList {
    data: User[];
}

const List: React.FC<IList> = ({ data }) => {
    return (
        <div>
            <ul>
                {data.map((user, idx) => (
                    <li key={idx}>{user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default List;