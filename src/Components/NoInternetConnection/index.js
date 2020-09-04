/* Redux */
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

/* Redux-actions */
import { actionDispatcher } from '../../Redux/Actions';


/* Components */
import view from "./view";

const mapStateToProps = ({ utilitiesReducer, }) => ({
    utilitiesReducer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ actionDispatcher }, dispatch);

const NoInternetConnectionContainer = connect(mapStateToProps, mapDispatchToProps)(view);

export default NoInternetConnectionContainer;
