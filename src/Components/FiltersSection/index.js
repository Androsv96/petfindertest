/* Redux */
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

/* Redux-actions */
import { actionDispatcher } from '../../Redux/Actions';


/* Components */
import view from "./view";

const mapStateToProps = ({ filtersReducer, petsReducer, }) => ({
    filtersReducer, petsReducer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ actionDispatcher }, dispatch);

const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(view);

export default FiltersContainer;
