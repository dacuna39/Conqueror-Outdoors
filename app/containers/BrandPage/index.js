/**
 *
 * BrandPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import makeSelectBrandPage from './selectors';
import reducer from './reducer';
import messages from './messages';

import Img from 'components/Img';
import Link from 'components/Link';

import Section from 'components/Containers/Section';
import CenteredSection from 'components/Containers/CenteredSection';
import BodyContainer from 'components/Containers/BodyContainer';
import Wrapper from 'components/Containers/Wrapper';
import WrapperCenter from 'components/Containers/WrapperCenter';
import WrapperCenterBottom from 'components/Containers/WrapperCenterBottom';
import WrapperLeft from 'components/Containers/WrapperLeft';
import ProductPreview from 'components/ProductPreview';

//images
import Woodsbackground from 'images/woods-background.png';
import BarnettLogo from 'images/barnett-logo.jpg';
import MissionLogo from 'images/mission-logo.png';
import MathewsLogo from 'images/mathews-logo.png';
import PseLogo from 'images/pse-logo.jpg';
import ExcaliburLogo from 'images/excalibur-logo.jpg';
import TenpointLogo from 'images/tenpoint-logo.jpg';


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

export class BrandPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>BrandPage</title>
          <meta name="description" content="Description of BrandPage" />
        </Helmet>

        <div style={{
          background: `url(${Woodsbackground})`,
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
        }}>

          <PageContainer>
            <BodyContainer>
              <H> Brands </H>
              <hr />
              
                <WrapperCenter>
                  <section> <Link to='/search/mathews'> <Img src={MathewsLogo} alt={'Mathews'} width='80%'/> </Link> </section>
                  <section> <Link to='/search/excalibur'> <Img src={ExcaliburLogo} alt={'Excalibur'} width='80%'/> </Link> </section>
                </WrapperCenter>
                <br />
                <WrapperCenter>
                  <section> <Link to='/search/pse'> <Img src={PseLogo} alt={'PSE'} width='80%'/> </Link> </section>
                  <section> <Link to='/search/barnett'> <Img src={BarnettLogo} alt={'Barnett'} width='80%'/> </Link> </section>
                  <section> <Link to='/search/mission'> <Img src={MissionLogo} alt={'Mission'} width='80%' /> </Link> </section>
                  <section> <Link to='/search/tenpoint'> <Img src={TenpointLogo} alt={'Tenpoint'} width='80%' /> </Link> </section>
                </WrapperCenter>

            </BodyContainer>
          </PageContainer>

        </div>
      </div>
    );
  }
}

BrandPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  brandpage: makeSelectBrandPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'brandPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(BrandPage);
