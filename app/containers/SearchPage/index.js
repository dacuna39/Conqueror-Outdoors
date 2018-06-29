/**
 *
 * SearchPage
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

import Section from 'components/Containers/Section';
import CenteredSection from 'components/Containers/CenteredSection';
import BodyContainer from 'components/Containers/BodyContainer';
import Wrapper from 'components/Containers/Wrapper';
import WrapperLeft from 'components/Containers/WrapperLeft';
import WrapperCenter from 'components/Containers/WrapperCenter';
import WrapperCenterBottom from 'components/Containers/WrapperCenterBottom';
import ThinContainer from 'components/Containers/ThinContainer';

import ProductPreview from 'components/ProductPreview';
import Icon from 'components/Icon';

import Select from 'components/FormComponents/Select';

import sampleDatabase from 'components/MockData/sampleDatabase.json';

import injectReducer from 'utils/injectReducer';
import makeSelectSearchPage from './selectors';
import reducer from './reducer';
import messages from './messages';

//images
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

class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);
    window.scrollTo(0,0)

    this.state = {
      filterOptions: ['Newest', 'Lowest Price', 'Highest Price', 'Light Weight First', 'Heavy Weight First'],
      filterSelected: 'Newest',

      brandOptions: ['All', 'Barnett', 'Mission', 'PSE'],
      brandSelected: 'All',

      typeOptions: ['All','Crossbows', 'Bows', 'Arrows','Cases'],
      typeSelected: 'All',

      consumerOptions: ['All','Men','Women','Youth'],
      consumerSelected: 'All',

      searchResults: [],
    };
  }
  
  handleFilterSelect = (e) => { this.setState({ filterSelected: e.target.value }) }
  handleBrandSelect = (e) => { this.setState({ brandSelected: e.target.value }) }
  handleTypeSelect = (e) => { this.setState({ typeSelected: e.target.value }) }
  handleConsumerSelect = (e) => { this.setState({ consumerSelected: e.target.value }) }

  componentDidMount() {
    this.search()
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
          <title>Search</title>
          <meta name="description" content="Search for Products" />
        </Helmet>
        
        <div style={{
          background: `url(${Woodsbackground})`,
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
        }}>
          <PageContainer>

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

export default SearchPage;
/*

SearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Searchpage: makeSelectSearchPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'SearchPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(SearchPage); */
