import LocationModal from "components/LocationModal";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { BsFillAspectRatioFill } from "react-icons/bs";
import { User } from "types";

import styles from "./styles.module.css"

interface IList {
    data: User[];
}

const List: React.FC<IList> = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [userData, setUserData] = useState<User>();

    const handleOpenModal = (user: User) => {
        setUserData(user)
        setIsModalOpen(true)
    }

    return (
        <div>
            <ListGroup as="ol">
                {data.map((user, idx) => (
                    <ListGroup.Item as="li" key={idx}>
                        <div className={styles.item}>
                            <img className={styles.image} src={user.picture.thumbnail} />

                            <div className={styles.description}>
                                <span>{`${user.name.first} ${user.name.last}`}</span>
                                <span>{user.email}</span>
                                <span>{user.phone}</span>
                            </div>

                            <div className={styles.action}>
                                <BsFillAspectRatioFill
                                    size={30}
                                    title="See location details" 
                                    onClick={() => handleOpenModal(user)}
                                />
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            
            {userData && (
                <LocationModal
                    isOpen={isModalOpen} 
                    handleClose={() => setIsModalOpen(false)}
                    user={userData}
                />
            )}
        </div>
    )
}

export default List;