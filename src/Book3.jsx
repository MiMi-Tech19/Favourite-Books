import { useState } from "react";

const Book3 = () => {
  const [showInfo, setShowInfo] = useState(false);

  const AboutBook3 =
    "   The Dark Tower is a series of fantasy novels by Stephen King that follows the journey of Roland Deschain, a gunslinger, as he seeks the Dark Tower, a mythical structure that is said to be the nexus of all universes.";

  return (
    <div>
      <p
        onClick={() => setShowInfo(!showInfo)}
        className="Title3"
        style={{ cursor: "pointer" }}
      >
        The dark tower
      </p>

      {showInfo && <p className="description">{AboutBook3}</p>}
    </div>
  );
};

export default Book3;
