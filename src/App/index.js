/* Redux */
import { connect } from "react-redux";

/* Components */
import App from "./App";

const mapStateToProps = ({ progressOnReducer }) => ({
    progressOnReducer
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
