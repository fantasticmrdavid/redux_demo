import { connect } from 'react-redux';
import Ui from './ui';

const stateToProps = (state) => {
  const { maps } = state;
  const { annotationList, mapList } = maps;
  return {
    maps: mapList.map((m) => {
      return {
        ...m,
        annotationList: annotationList.filter(a => a.mapId === m.id),
      };
    }),
  };
};

export default connect(stateToProps)(Ui);
