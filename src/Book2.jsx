import { useState } from "react";

const Book2 = () => {
  const [showInfo, setShowInfo] = useState(false);

  const AboutBook2 =
    "Fairy Tales of the World is a collection of enchanting stories from various cultures, featuring magical creatures, brave heroes, and timeless lessons that captivate readers of all ages.";

  return (
    <div>
      <p
        onClick={() => setShowInfo(!showInfo)}
        className="Title2"
        style={{ cursor: "pointer" }}
      >
        Fairy tales of the world
      </p>

      {showInfo && <p className="description">{AboutBook2}</p>}
    </div>
  );
};

export default Book2;
