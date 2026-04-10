import { useState } from "react";

const Book1 = () => {
  const [showInfo, setShowInfo] = useState(false);

  const AboutBook1 =
    "Things Fall Apart is a novel by Chinua Achebe that tells the story of Okonkwo, a proud and ambitious Igbo man in Nigeria.";

  return (
    <div>
      <p
        onClick={() => setShowInfo(!showInfo)}
        className="Title1"
        style={{ cursor: "pointer" }}
      >
        Things fall apart
      </p>

      {showInfo && <p className="description">{AboutBook1}</p>}
    </div>
  );
};

export default Book1;
