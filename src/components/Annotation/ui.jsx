import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Annotation = ({ content, deleteAnnotation, location }) => {
  const {
    Container,
    Content,
    DeleteButton,
  } = styles;

  const handleDeleteAnnotation = () => deleteAnnotation();

  return (
    <Container location={location}>
      <Content>{content}</Content>
      <DeleteButton onClick={handleDeleteAnnotation}>X</DeleteButton>
    </Container>
  );
};

Annotation.propTypes = {
  content: PropTypes.string,
  deleteAnnotation: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default Annotation;
