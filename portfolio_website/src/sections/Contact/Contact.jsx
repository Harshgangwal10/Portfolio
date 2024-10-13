import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
  
      <form action="">
      <h1 className="sectioTitle">Contact</h1>
      <div className="formGroup">
        <label htmlFor="name" hidden>
          Name
        </label>
        <input type="text" name="name" placeholder="Name" required />
      </div>
      <div className="formGroup">
        <label htmlFor="email" hidden>
          Email
        </label>
        <input type="text" email="email" placeholder="Email" required />
      </div>
      <div className="formGroup">
        <label htmlFor="name" hidden>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
      </div>
      
      <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
