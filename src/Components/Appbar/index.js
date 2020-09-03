/* Redux */
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

/* Redux-actions */
import { actionDispatcher } from '../../Redux/Actions';


/* Components */
import view from "./view";

const mapStateToProps = ({ filtersReducer, }) => ({
    filtersReducer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ actionDispatcher }, dispatch);

const AppbarContainer = connect(mapStateToProps, mapDispatchToProps)(view);

export default AppbarContainer;
