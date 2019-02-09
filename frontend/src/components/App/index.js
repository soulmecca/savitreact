import React, { Component } from "react";
import styles from "./styles.scss";
import Footer from "components/Footer";

class App extends Component {
	render() {
		return (
			<div className={styles.app}>
				<Footer />
			</div>
		);
	}
}

export default App;
