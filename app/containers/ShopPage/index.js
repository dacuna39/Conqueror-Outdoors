/**
 *
 * ShopPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import { bindActionCreators } from 'redux';

import Section from 'components/Containers/Section';
import CenteredSection from 'components/Containers/CenteredSection';
import BodyContainer from 'components/Containers/BodyContainer';
import Wrapper from 'components/Containers/Wrapper';
import WrapperCenter from 'components/Containers/WrapperCenter';
import WrapperCenterBottom from 'components/Containers/WrapperCenterBottom';
import WrapperLeft from 'components/Containers/WrapperLeft';
import ThinContainer from 'components/Containers/ThinContainer';

import ProductPreview from 'components/ProductPreview';
import ImageCaption from 'components/ImageCaption';

import Select from 'components/FormComponents/Select';

import sampleDatabase from 'components/MockData/sampleDatabase.json';

import Icon from 'components/Icon';

//images
import Woodsbackground from 'images/woods-background.png';
import BowtechBanner from 'images/Bowtech-Banner.jpg';
import AssassinFeature from 'images/Assassin-Feature.jpg';

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

export class ShopPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);
    //window.scrollTo(0,0)

    this.state = {
      filterOptions: ['Newest', 'Best Seller','Lowest Price', 'Highest Price', 'Light Weight First', 'Heavy Weight First'],
      filterSelected: 'Newest',

      brandOptions: ['All', 'Barnett', 'Mission', 'PSE'],
      brandSelected: 'All',

      typeOptions: ['All','Crossbows', 'Bows', 'Arrows','Cases'],
      typeSelected: 'All',

      consumerOptions: ['All','Men','Women','Youth'],
      consumerSelected: 'All',

      viewportWidth: window.innerWidth,

      searchResults: [],
      
      hotProducts:     [{ //placeholder product so that the hot products container doesnt shrink due to empty data
        "title":"Barnett Raptor Pro",
        "images":["http://cdn3.bigcommerce.com/s-d4f5hm3/products/10672/images/27973/Barnett-Raptor-FX3-Pro-Crossbow-Package-042609781423_image1__38036.1499378636.1280.1280.jpg?c=2","https://robohash.org/deseruntomniset.bmp?size=500x500&set=set1","https://robohash.org/voluptasrerumdolorum.png?size=500x500&set=set1"],
        "options":[{"name":"Size","choices":["Small","Medium","Large"]},{"name":"Weight","choices":["Light","Heavy"]},{"name":"Color","choices":["Blue","Red"]}],
        "overview":"Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
        "price":2562,
        "salePrice":1460,
        "concept":"Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
        "reviews":[{"starValue":2,"text":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."},{"starValue":3,"text":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat."},{"starValue":4,"text":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum."},{"starValue":2,"text":"Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."},{"starValue":2,"text":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat."}],
        "_id":1,
        "brand":"Barnett",
        "category":"Crossbows",
        "releaseDate":"2017-12-20 19:29:38",
        "numSales":"1258",
        "audience":"Men"
      }],
      
    };
  }

  handleFilterSelect = (e) => { this.setState({ filterSelected: e.target.value }) }
  handleBrandSelect = (e) => { this.setState({ brandSelected: e.target.value }) }
  handleTypeSelect = (e) => { this.setState({ typeSelected: e.target.value }) }
  handleConsumerSelect = (e) => { this.setState({ consumerSelected: e.target.value }) }

  componentDidMount() {

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.search()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.setState({ viewportWidth: window.innerWidth });
  }

  search() {
    console.log('searching');
    
    this.setState({ 
      searchResults: eval(sampleDatabase), //search endpoint
      hotProducts: eval(sampleDatabase), //hot products endpoint
    });
    /*
    fetch('./sampleDatabase.json'
    , {
      //method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then( response => {
      console.log('response', response);
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(results => {
      console.log('results', results);
    })
    .catch(error => console.error('Error:', error));
    */
  }

  clickProduct = (product) => {
    console.log(product);
  }

  returnProductsList = (productsList) => {
    if (productsList != null) {
      return productsList.map((product, index) => {
        
        if (index <= 24) {
          return(
            <ProductPreview
              key={index}
              _id={product._id}
              title= {product.title}
              img= {product.images[0]}
              price= {product.price}
              salePrice= {product.salePrice}
              clickFunc={() => this.clickProduct({ _id: product._id, title: product.title, img: product.images[0], description: product.description, price: product.price, salePrice: product.salePrice })}
            />
          );
        }
        
      })
    }
    else {
      return(
        <h3> Loading... </h3>
      );
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>ShopPage</title>
          <meta name="description" content="Description of ShopPage" />
        </Helmet>
        
        <div style={{
          background: `url(${Woodsbackground})`,
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
        }}>
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

            {/*
              * Hot Products  
            */}

        <BodyContainer>
          <H> Hot Products </H>
          <hr />
          <Wrapper>
            <Section style={{ width: '100%'}}>
              <Carousel className={'hot-products'} slidesToShow={this.state.viewportWidth/316} slidesToScroll={'auto'} framePadding={'1em 1.5em'} initialSlideHeight={400} >
                  {this.returnProductsList(this.state.searchResults)}
              </Carousel>
            </Section>
          </Wrapper>
          <br />
        </BodyContainer>

        {/* 
          * suggested items
        */}

        <BodyContainer>
          <H> Suggested Items </H>
          <hr />
          <ThinContainer>
            <WrapperCenterBottom>
              <div>
                <label> Filter </label>
                <Select 
                  name= {''}
                  options= {this.state.filterOptions}
                  selectedOption = {this.state.filterSelected}
                  controlFunc= {this.handleFilterSelect}
                />
              </div>
             
              <div>
              <label> Brand </label>
              <Select 
                name= {''}
                options= {this.state.brandOptions}
                selectedOption = {this.state.brandSelected}
                controlFunc= {this.handleBrandSelect}
              />
              </div>
             
              <div>
              <label> Type </label>
              <Select 
                name= {''}
                options= {this.state.typeOptions}
                selectedOption = {this.state.typeSelected}
                controlFunc= {this.handleTypeSelect}
              />
              </div>
              
              <div>
              <label> For </label>
              <Select 
                name= {''}
                options= {this.state.consumerOptions}
                selectedOption = {this.state.consumerSelected}
                controlFunc= {this.handleConsumerSelect}
              />
              </div>
              
            <div style={{marginBottom: '4px'}}>
            <Icon
              className={'w-icon-search'}
            />
            </div>
            </WrapperCenterBottom>

            <hr />
            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
              {this.returnProductsList(this.state.searchResults)}
            </div>

          </ThinContainer>
        </BodyContainer>
        
          </PageContainer>
        </div>
      </div>
    );
  }
}

export default ShopPage;

/*
ShopPage.propTypes = {
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
)(ShopPage);
*/