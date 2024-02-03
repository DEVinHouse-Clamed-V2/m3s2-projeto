import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import ModalTag from "../Modal";
import { useState } from "react";

const Card = ({ service }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="container-card">
      {service.map((e, index) => (
        <div className="containt-card" key={index} onClick={() => {}}>
          {e}

          <ModalTag />
        </div>
      ))}
    </div>
  );
};

export default Card;
