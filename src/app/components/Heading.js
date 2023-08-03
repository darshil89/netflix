import classes from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";
const Heading = () => {
  return (
    <header className={classes.main_header}>
      <div className={classes.navbar_brand}>
        <Link href={"/"}>
          <h1>dFlix</h1>
        </Link>
      </div>
      <Nav/>
    </header>
  );
};

export default Heading;
