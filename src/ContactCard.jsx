function ContactCard(props) {
  const name = props.name;
  const job = props.job;
  const email = props.email;
  return (
    <div className="contact-card">
      <h2>{name}</h2>
      <p>Job:{job}</p>
      <p>Email:{email}</p>
    </div>
  );
}

export default ContactCard;
