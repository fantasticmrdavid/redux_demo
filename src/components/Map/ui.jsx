import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddAnnotationDialog from 'components/AddAnnotationDialog';
import Annotation from 'components/Annotation';
import * as styles from './styles';

class Map extends Component {
  constructor(props) {
    super(props);
    this.boundShowAddAnnotationDialog = this.showAddAnnotationDialog.bind(this);
    this.boundHideAddAnnotationDialog = this.hideAddAnnotationDialog.bind(this);
    this.state = {
      addAnnotationDialog: {
        visible: false,
        location: {},
      },
    };
  }

  showAddAnnotationDialog(e) {
    if (e.target !== e.currentTarget) return false;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    return this.setState({
      addAnnotationDialog: {
        visible: true,
        location: {
          x: parseInt(x, 10),
          y: parseInt(y, 10),
        },
      },
    });
  }

  hideAddAnnotationDialog() {
    this.setState({
      addAnnotationDialog: {
        visible: false,
        location: {},
      },
    });
  }

  render() {
    const {
      annotationList,
      id,
      name,
    } = this.props;

    const { addAnnotationDialog } = this.state;

    const {
      Canvas,
      Container,
      Name,
    } = styles;

    return (
      <Container>
        {
          addAnnotationDialog.visible &&
          <AddAnnotationDialog {...addAnnotationDialog} mapId={id} closeDialog={this.boundHideAddAnnotationDialog} />
        }
        <Canvas onClick={this.boundShowAddAnnotationDialog}>
          {annotationList.map(a => <Annotation key={`annotation_${a.id}`}{...a} />)}
        </Canvas>
        <Name>{name}</Name>
      </Container>
    );
  }
}

Map.propTypes = {
  annotationList: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Map;
