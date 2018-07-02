/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
//import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';


//import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styled from 'styled-components';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

import H2 from 'components/H2';
import Img from 'components/Img';

import injectReducer from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import SectionHalf from './SectionHalf';

import ImageCaption from 'components/ImageCaption';
import Link from 'components/Link';
import Button from 'components/Button';

import Section from 'components/Containers/Section';
import CenteredSection from 'components/Containers/CenteredSection';
import BodyContainer from 'components/Containers/BodyContainer';
import Wrapper from 'components/Containers/Wrapper';
import WrapperCenter from 'components/Containers/WrapperCenter';
import WrapperCenterBottom from 'components/Containers/WrapperCenterBottom';
import WrapperLeft from 'components/Containers/WrapperLeft';

//actions
import { SaveProduct } from './SaveProduct';

/* images */
import Woodsbackground from 'images/woods-background.png';

import BowtechBanner from 'images/Bowtech-Banner.jpg';
import AssassinFeature from 'images/Assassin-Feature.jpg';
import ArcheryBanner from 'images/archery-banner.jpg';
import BannerHunt from 'images/banner-hunt.jpg';
import BannerDeerhunt from 'images/banner-deer-hunt.jpg';

import AssassinCrossbow from 'images/assassin-crossbow.png';
import Sub1Crossbow from 'images/sub-1-crossbow.png';
import PredatorCrossbow from 'images/predator-crossbow.png';

import CompanyPic2 from 'images/company-pic2.jpg';
import CompanyPic3 from 'images/company-pic3.jpg';
import CompanyPic4 from 'images/company-pic4.jpg';
import CompanyPic5 from 'images/company-pic5.jpg';

import Certificate from 'images/certificate.png';
import SellersPermit from 'images/sellers-permit.png';

import GoogleMap from 'images/google-map.png';

const PageContainer = styled.div`
  width: 100%;
  padding: 1em 5%;
  color: #eee;
  font-size: 16px;
`;

const H = styled.p`
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

const bannerContent = [
	{
    description:
    'PSE Banner',
    image: ArcheryBanner,
	},
	{
		description:
    'Barnett Banner',
     image: BannerHunt,
  },
	{
		description:
    'Barnett Banner',
     image: BannerDeerhunt,
  },
];

const companyPics = [
  /*
  {
    description: 'CompanyPic1',
    image: CompanyPic1,
  },
  */
  {
    description: 'CompanyPic2',
    image: CompanyPic2,
  },
  {
    description: 'CompanyPic3',
    image: CompanyPic3,
  },
  {
    description: 'CompanyPic4',
    image: CompanyPic4,
  },
  {
    description: 'CompanyPic5',
    image: CompanyPic5,
  },
];

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home Page" />
        </Helmet>

        {/* 
          * banner
          */}
      <div style={{
          background: `url(${Woodsbackground})`,
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
        }}>
   
      <WrapperCenter>
        <Img src={ArcheryBanner} alt={'Banner'} width={'100%'} />
      </WrapperCenter>

      {/*}
      <div style={{width: '90%', margin: '0 auto'}}>
          <Slider duration={5000}>
            {bannerContent.map((article, index) => 
              <Img key={index} src={article.image} alt={article.description} />
            )}
          </Slider>
      </div>

      */}

        {/* 
          * company Concept raven
          */} 
      
      <PageContainer>
        {/*
          * catalog 
        */}

        <BodyContainer>
          <H> Products Guide </H>
          <hr />
          <WrapperCenter style={{ flexWrap: 'wrap' }}>

            <ImageCaption
              src={BowtechBanner} alt='Brands'
              caption='Brands'
              to={'/Brands'}
            />
            <ImageCaption
              src={AssassinFeature} alt='Crossbows'
              caption='Crossbows'
              to={'/search/Crossbows'}
            />
            <ImageCaption
              src={BowtechBanner} alt='Bows'
              caption='Bows'
              to={'/search/Crossbows'}
            />
            <ImageCaption
              src={AssassinFeature} alt='Accessories'
              caption='Accessories'
              to={'/search/Crossbows'}
            />

          </WrapperCenter>
        </BodyContainer>

        <BodyContainer>
          <WrapperCenter style={{ flexWrap: 'wrap' }}>
            <SectionHalf>
              <H> Barnett Cowssbows </H>
              <hr />
              <p> Barnett Outdoors, LLC is the world’s leading manufacturer of crossbow, archery and slingshot products. As with many success stories, ours started small in 1962 when a man named Bernard Barnett pursued a hobby working with crossbows from his garage in the United Kingdom. Mr. Barnett began filling orders for his acquaintances who were impressed by his handiwork, and the business was born. From there, manufacturing facilities popped up across Europe and eventually made their way to the United States. Growth in the American market resulted in additional product lines, streamlined manufacturing processes and cost reduction that eventually brought operations to the U.S. permanently in 2003. </p>
              <Link to='search/barnett'> <Button> Learn More </Button> </Link>
            </SectionHalf>
            <SectionHalf>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SdSuucWBAoU" frameborder="0" allowfullscreen></iframe>
            </SectionHalf>
          </WrapperCenter>

          <WrapperCenter style={{ flexWrap: 'wrap' }}>
            <SectionHalf>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xbmdHFiNhu8" frameBorder="0" allowFullScreen></iframe>
            </SectionHalf> 
            <SectionHalf>
              <br /><br />
              <H> Excalibur Cowssbows </H>
              <hr />
              <p> Excalibur Crossbows for over 35 years have been the #1 choice for crossbow hunters. Our crossbows have proven time and time again to be the toughest, most reliable and accurate on the market and the only crossbow that can be Fixed-In-The-Field. </p>
              <Link to='search/excalibur'> <Button> Learn More </Button> </Link>
              <br /> <br />
            </SectionHalf>
           </WrapperCenter>

              <WrapperCenter style={{ flexWrap: 'wrap' }}>
                <SectionHalf>
                  <br />
                  <H> Mission Cowssbows </H>
                  <hr />
                  <p> First and foremost, we are hunters. </p>
                  <p> We look through our hunting lens to identify the ways to modernize crossbow design and optimize performance.  Our CEO and Chief Engineer, Matt McPherson, and his team bring over 50 years of archery and design experience to this endeavor, while our state-of-the-art manufacturing ensures their vision is executed to the highest standards of quality and craftsmanship. </p>
                  <Link to='search/excalibur'> <Button> Learn More </Button> </Link>
                </SectionHalf>
                <SectionHalf>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/G36Y1HLDgAY" frameborder="0" allowFullScreen></iframe>
                </SectionHalf>
              </WrapperCenter>
        </BodyContainer>

        {/* 
          * about us
         

        <BodyContainer>
        <H> About Us </H>
        <hr />
        <Wrapper>
          <Section>
            <H2> Info </H2>
            <hr />
            <ul>
              <li> Name: Conqueror Outdoors </li>
              <li> Year: 2018 </li>
              <li> Market: Sporting Goods/ Recreation </li>
            </ul>
          </Section>

          <CenteredSection>
            <H2> Certificates </H2>
            <hr />
            <p> Business License </p>
            <Img src={Certificate} alt={'Business License'} width={'80%'}/>
            <p> Seller's Permit </p>
            <Img src={SellersPermit} alt={'Seller\'s Permit'} width={'80%'}/>
          </CenteredSection>

          <Section>
            <H2> Our Office </H2>
            <hr />
            <Slider duration={3000} >
              {companyPics.map((pic, index) => 
                <Img key={index} src={pic.image} alt={pic.description}  />
              )}
            </Slider>
 
           
            <Carousel className={'company-pics'} slidesToShow={1} slidesToScroll={'auto'} >
              {companyPics.map((pic, index) => {
                  return (
                    <Img key={index} src={pic.img} alt={pic.description} width={'33%'} />
                  );
                })
              }
            </Carousel>
            
            
            <br />
            <Wrapper>
              <img src={CompanyPic3} alt={''} width={'33%'} />
              <img src={CompanyPic4} alt={''} width={'33%'} />
              <img src={CompanyPic5} alt={''} width={'33%'} />
            </Wrapper>
          </Section>

        </Wrapper>
      </BodyContainer>

      
          * contact
          */}

      <BodyContainer>
        <H> Contact </H>
        <hr />
        <Wrapper style={{ flexWrap: 'wrap' }}>
          <Section>
            <H2> Contact Info </H2>
            <hr />
            <h3> Conqueror Outdoors </h3>
            <ul>
              <li> Email: <a style={{color: '#eee'}} href='mailto:Alanhe@conquerorcrossbow.com'> Alanhe@conquerorcrossbow.com </a> </li>
              <li> Telephone: 1-562-524-2002 </li>
              <li> 721 West Whittier Blvd, Suite S <br /> La Habra, CA 90631, USA </li>
            </ul>
          </Section>

          <CenteredSection>
            <H2> Working Hours </H2>
            <hr />
            <h3> Monday to Friday </h3> 
            <p> 9:00am - 5:00pm </p>
            <p style={{ fontStyle: 'italic' }}> Except Holidays </p>
          </CenteredSection>

          <CenteredSection>
            <H2> Visit Our Office! </H2>
            <hr />
            <Img src={GoogleMap} alt={"Office Location Map"} width={'75%'}/>
          </CenteredSection>

        </Wrapper>
      </BodyContainer>

      </PageContainer>

      </div>
      </article>
    );
  }
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({SaveProduct: SaveProduct}, dispatch)
}


export default connect(matchDispatchToProps)(Home);

/*
Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(Home);
*/
