import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from 'styles/global';
import * as styles from './styles';

const Template = ({ children }) => {
  const {
    Container,
    Content,
  } = styles;

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </Fragment>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
