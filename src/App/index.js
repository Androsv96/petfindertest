/* Redux */
import { connect } from "react-redux";

/* Components */
import App from "./App";

const mapStateToProps = ({ utilitiesReducer, filtersReducer, petsReducer }) => ({
    utilitiesReducer, filtersReducer, petsReducer
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
