import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
import Img1 from "@/assets/genetic-data-svgrepo-com.svg";

export const App = () => {
	return (
		<div className={styles.test}>
			PLATFORM - {__PLATFORM__}
			<Img1 style={{ color: "blue" }} width={50} height={50}/>
			<Link to="/about">About</Link>
			<Link to="/shop">Shop</Link>
			hello world
			<About/>
			<Outlet/>
		</div>
	);
};