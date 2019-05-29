import { connect } from 'react-redux';
import * as actions from './actions';
import Ui from './ui';

const dispatchToProps = (dispatch, ownProps) => {
  const {
    mapId,
    location,
  } = ownProps;
  return {
    addAnnotation: content => dispatch(actions.addAnnotation({
      content,
      location,
      mapId,
    })),
  };
};

export default connect(null, dispatchToProps)(Ui);
