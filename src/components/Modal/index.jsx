import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";

const ModalTag = () => {
  const [show, setShow] = useState(false);
  const [diaDaSemana, setDiaDaSemana] = useState();
  const [pet, setPet] = useState();

  const semana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
    "Domingo",
  ];

  const pets = ["cachorro", "gato", "cavalo", "guaxinim", "outros"];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-modal" variant="primary" onClick={handleShow}>
        Abrir modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="div-semana">
            {semana.map((e) => (
              <button
                onClick={() => setDiaDaSemana(e)}
                className="div-dia"
                key={e}
              >
                <p>{e[0]}</p>
              </button>
            ))}
          </div>
          <div className="div-semana">
            {pets.map((e) => (
              <button onClick={() => setPet(e)} className="div-pet" key={e}>
                <p>{e}</p>
              </button>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log(diaDaSemana, pet);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTag;
