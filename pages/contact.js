import Layout from "../components/layout";
import ContactInfo from "../components/contactinfo";
import ContactForm from "../components/contactform";
function Contact() {
  return (
    <Layout pageTitle="AWeb4Devs - Contact us" description="WHATSAPP: +584244320635, EMAIL: support@aweb4devs.com, GITHUB: http://github.com/dragonpipe/, https://github.com/anderdarkstorm, LINKEDIN: https://www.linkedin.com/in/wilfredo-alexander-loreto-irady-3600291ab/,https://www.linkedin.com/in/anderson-arciniegas-728b2b1b3/">
      <ContactInfo />
      <ContactForm />
    </Layout>
  );
}

export default Contact;
