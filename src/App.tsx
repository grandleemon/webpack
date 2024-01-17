import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
	return (
		<div className={styles.test}>
			<Link to="/about">About</Link>
			<Link to="/shop">Shop</Link>
			hello world
			<Outlet/>
		</div>
	);
};