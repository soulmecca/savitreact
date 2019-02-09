import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({ name: "savitreact" })
	.use(reactotronRedux())
	.connect(); // let's connect!

export default Reactotron;
