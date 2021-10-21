import Card from "../UI/Card";
import classes from "./Footer.module.css";
const Header = (props) => {
  return (
    <>
      <footer className={classes.footer}>
        <Card>
          By <a href="https://www.linkedin.com/in/paolo-tormon">Paolo Tormon</a>{" "}
          with React Framework, 2021
        </Card>
      </footer>
    </>
  );
};

export default Header;
