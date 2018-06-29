/**
 *
 * MediaPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';

import Section from 'components/Containers/Section';
import CenteredSection from 'components/Containers/CenteredSection';
import BodyContainer from 'components/Containers/BodyContainer';
import Wrapper from 'components/Containers/Wrapper';
import WrapperCenter from 'components/Containers/WrapperCenter';
import WrapperCenterBottom from 'components/Containers/WrapperCenterBottom';
import WrapperLeft from 'components/Containers/WrapperLeft';
import ProductPreview from 'components/ProductPreview';

/* images */
import Woodsbackground from 'images/woods-background.png';

const PageContainer = styled.div`
  width: 100%;
  padding: 1em 5%;
  color: #eee;
`;

const H = styled.p`
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

export class MediaPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);
    window.scrollTo({top: 0, left:0,behavior: 'smooth'});
  }
  
  render() {
    return (
      <div>
        <Helmet>
          <title>MediaPage</title>
          <meta name="description" content="Description of MediaPage" />
        </Helmet>
        
        <div style={{
          background: `url(${Woodsbackground})`,
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
        }}>
          <PageContainer>
            <BodyContainer>
              <H> Media </H>
              <hr />
            </BodyContainer>

            <BodyContainer>
              <H> Video </H>
              <hr />
              <Wrapper>
                <Section> <iframe width="100%" height='400px' src="https://www.youtube.com/embed/9L3cSBDZRIQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </Section> 
                <Section> <iframe width="100%" height="400px" src="https://www.youtube.com/embed/xbmdHFiNhu8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </Section> 
              </Wrapper>
              <Wrapper>
                <Section> <iframe width="100%" height="400px" src="https://www.youtube.com/embed/G36Y1HLDgAY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </Section>           
              </Wrapper>
            </BodyContainer>

            <BodyContainer>
              <H> Articles </H>
              <hr />
            </BodyContainer>
          </PageContainer>
        </div>
      </div>
    );
  }
}

MediaPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(MediaPage);
