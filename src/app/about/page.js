import Herosection from "../components/Herosection";
import Head from "next/head";
const About = () => {
  return (
    <>
    <Head>
        <title>DAbout</title>
        <meta
          name="description"
          content="A netflix clone made with nextjs and tailwindcss"
        />
      </Head>
      <Herosection 
      title={"Our Story"}
      imageUrl={"/about1.svg"}
      />
    </>
  );
};

export default About;
