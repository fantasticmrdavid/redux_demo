import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

class AddAnnotationDialog extends Component {
  constructor(props) {
    super(props);
    this.boundHandleAddAnnotation = this.handleAddAnnotation.bind(this);
    this.boundSetContent = this.setContent.bind(this);
    this.state = {
      content: '',
    };
  }

  setContent(e) {
    this.setState({ content: e.target.value });
  }

  handleAddAnnotation() {
    const { addAnnotation, closeDialog } = this.props;
    const { content } = this.state;
    addAnnotation(content);
    closeDialog();
  }

  render() {
    const { location } = this.props;
    const {
      AddButton,
      Container,
      Input,
    } = styles;

    return (
      <Container location={location}>
        <Input
          type="text"
          onKeyUp={this.boundSetContent}
          autoFocus
        />
        <AddButton onClick={this.boundHandleAddAnnotation}>OK</AddButton>
      </Container>
    );
  }
}

AddAnnotationDialog.propTypes = {
  addAnnotation: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default AddAnnotationDialog;
