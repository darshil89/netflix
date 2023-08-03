import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css";
import ContactCard from "../components/ContactCard";
import Head from "next/head";
const Contact = () => {
  return (
    <>

<Head>
        <title>dContact</title>
        <meta
          name="description"
          content="Try contacting us"
        />
      </Head>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9776447765416!2d77.5665551!3d12.909158299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1690959137087!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      className={styles.mapping}></iframe>
    </>
  );
};

export default Contact;
