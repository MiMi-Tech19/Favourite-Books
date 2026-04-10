import Book1 from "./Book1";
import Book2 from "./Book2";
import Book3 from "./Book3";

const Booklist = () => {
  return (
    <div className="Booklist">
      <p>
        <Book1 />
      </p>
      <p>
        <Book2 />
      </p>
      <p>
        <Book3 />
      </p>
    </div>
  );
};

export default Booklist;
