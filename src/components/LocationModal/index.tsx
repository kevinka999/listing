import { Modal, Button } from "react-bootstrap";
import { User } from "types";

import styles from "./styles.module.css"

interface ILocationModal {
    isOpen: boolean;
    handleClose: () => void;
    user: User;
}

const LocationModal: React.FC<ILocationModal> = ({
    isOpen,
    handleClose,
    user
}) => {
    const { location } = user

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Location details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className={styles.container}>
                    <span>
                        <b>Street: </b>
                        {`${location.street.name}, ${location.street.number}`}
                    </span>
                    
                    <span>
                        <b>City: </b>
                        {location.city}
                    </span>

                    <span>
                        <b>State: </b>
                        {location.state}
                    </span>

                    <span>
                        <b>Postal Code: </b>
                        {location.postcode}
                    </span>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LocationModal;