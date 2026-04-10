import Header from "./Header";
import Booklist from "./BookList";
import ContactCard from "./ContactCard";

function Contact() {
  const details = {
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  };

  return <ContactCard details={details} />;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Booklist />

      <ContactCard
        name="Sunita Kumar"
        job="Electrical Engineer"
        email="sunita.kumar@acme.co"
      />
    </div>
  );
}

export default App;
