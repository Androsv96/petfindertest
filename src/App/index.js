/* Redux */
import { connect } from "react-redux";

/* Components */
import App from "./App";

const mapStateToProps = state => ({
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
