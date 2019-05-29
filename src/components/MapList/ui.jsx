import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Map from 'components/Map';
import * as styles from './styles';

const MapList = ({ maps }) => {
  const {
    List,
    Note,
  } = styles;
  return (
    <Fragment>
      <List>
        { maps.map(m => <Map {...m} key={`map_${m.id}`} />) }
      </List>
      <Note>Click on a map to place an annotation</Note>
    </Fragment>
  );
};

MapList.propTypes = {
  maps: PropTypes.array.isRequired,
};

export default MapList;
