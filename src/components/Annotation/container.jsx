import { connect } from 'react-redux';
import * as actions from './actions';
import Ui from './ui';

const dispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    deleteAnnotation: () => dispatch(actions.deleteAnnotation(id)),
  };
};

export default connect(null, dispatchToProps)(Ui);
