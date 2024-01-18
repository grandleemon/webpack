import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
import Img1 from "@/assets/genetic-data-svgrepo-com.svg";

const fn = () => {
	fn2();
};

const fn2 = () => {
	throw new Error();
};

export const App = () => {
	return (
		<div data-testid="app" className={styles.test}>
			<button onClick={fn}>throw error</button>
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