import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "components";
import { User } from "types";
import api from "services/api";

import styles from "./styles.module.css";

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
        <Container className={styles.container}>
            <Row>
                <Col>
                    {userList && (
                        <div className={styles.content}>
                            <h1>List</h1>
                            <p>Display a list of user fetched by randomuser.me</p>
                            
                            <List data={userList} />
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;