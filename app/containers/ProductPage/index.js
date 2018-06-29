/**
 *
 * ProductPage
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
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Carousel from 'nuka-carousel';

import injectReducer from 'utils/injectReducer';
import makeSelectProductPage from './selectors';
import reducer from './reducer';
import messages from './messages';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Img from 'components/Img';
import Button from 'components/Button';

import SingleInput from 'components/FormComponents/SingleInput';
import TextArea from 'components/FormComponents/TextArea';
import Select from 'components/FormComponents/Select';
import ProductPreview from 'components/ProductPreview';

import Section from 'components/Containers/Section';
import SectionSmall from 'components/Containers/SectionSmall';
import CenteredSection from 'components/Containers/CenteredSection';
import BodyContainer from 'components/Containers/BodyContainer';
import Wrapper from 'components/Containers/Wrapper';
import WrapperLeft from 'components/Containers/WrapperLeft';
import WrapperCenter from 'components/Containers/WrapperCenter';
import WrapperCenterBottom from 'components/Containers/WrapperCenterBottom';

import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Modal from './Modal';
import ItemImgPreview from './ItemImgPreview';
import SectionMinHeight from './SectionMinHeight';

import sampleDatabase from 'components/MockData/sampleDatabase.json';

/* Images */
import Woodsbackground from 'images/woods-background.png';
import banner_barnett from 'images/banner_barnett.jpg';

const PageContainer = styled.div`
  width: 100%;
  font-size: medium;
  padding: 1em 5%;
  color: #eee;
`;

const RedText = styled.div`
  color: #b22222;
  text-decoration: line-through;
`;

export class ProductPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);
    window.scrollTo(0,0);

    this.state = {
      showReviewModal: false,
      descriptionBoxInfo: <div>
                            <h4> Description </h4> <p> &nbsp; </p>
                          </div>,
      currentImage: '',

      option1: 'opt[0]',
      option2: 'opt[1]',
      option3: 'opt[2]',
      option4: 'opt[3]',
      option5: 'opt[4]',

      quantity: '1',

      reviewerName: '',
      reviewText: '',

      productId: 0,
      productForSale: {
        title: '',
        images: [''],
        options: [ {name: '', choices: ['']} ],
        overview: '',
        price: 0,
        salePrice: 0,
        concept: '',
        description: '',
        reviews: [ {starValue: 0, text: ''} ],
  
        _id: 0,
        brand: '',
        category: '',
        releaseDate: Date.now(),
        numSales: 0,
        audience: '',
      },

      viewportWidth: window.innerWidth,
      relatedProducts: [],
    }
  }

  componentDidMount() {

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));

    this.productId = window.location.href.replace('http://localhost:3000/product/', '');
    console.log('this.productid', this.productId);

    this.setState({
      productForSale: eval(sampleDatabase[this.productId-1]),
      relatedProducts: eval(sampleDatabase),
    }
    , () => {

      //ensures that all state variables for options are not undefined by adding 10 empty fields
      //max options: 1 + 10 empty fields = 11 options. increase 10 in the for loop for more options
      var opt = this.state.productForSale.options.map((op) => {
        return op.choices[0];
      })
      for (var i =0; i < 10; i++){
        opt.push('');
      }
      //end options check

      this.setState({
        currentImage: this.state.productForSale.images[0],
        descriptionBoxInfo: <div>
                              <h4> Description </h4>
                              <p> {this.state.productForSale.description} </p>
                              <ul>
                                <li> Brand: {this.state.productForSale.brand} </li>
                                <li> Category: {this.state.productForSale.category} </li>
                                <li> For: {this.state.productForSale.audience} </li>
                              </ul>
                            </div>,
        option1: opt[0],
        option2: opt[1],
        option3: opt[2],
        option4: opt[3],
        option5: opt[4],
       })
      console.log('this.state.productforsale', this.state.productForSale)
     })
  }

  updateDimensions() {
    this.setState({ viewportWidth: window.innerWidth });
  }


  toggleReviewModal = () => {
    this.setState({ showReviewModal: !this.state.showReviewModal });
  }

  clickDescription = (e) => {
    this.setState({ descriptionBoxInfo: 
      <div>
        <h4> Description </h4>
        <p> {this.state.productForSale.description} </p>
        <ul>
          <li> Brand: {this.state.productForSale.brand} </li>
          <li> Category: {this.state.productForSale.category} </li>
          <li> For: {this.state.productForSale.audience} </li>
        </ul>
      </div>,
    })
  }
  clickOurService = (e) => {
    this.setState({ descriptionBoxInfo: <h4> Our Service </h4> })
  }
  clickHowToOrder = (e) => {
    this.setState({ descriptionBoxInfo: <h4> How To Order </h4> })
  }
  clickShipping = (e) => {
    this.setState({ descriptionBoxInfo: <h4> Our Shipping </h4> })
  }

  handleCurrentImage = (e) => { this.setState({ currentImage: e.target.value }) }

  handleOption1Select = (e) => { this.setState({ option1: e.target.value }) };
  handleOption2Select = (e) => { this.setState({ option2: e.target.value }) };
  handleOption3Select = (e) => { this.setState({ option3: e.target.value }) };
  handleOption4Select = (e) => { this.setState({ option4: e.target.value }) };
  handleOption5Select = (e) => { this.setState({ option5: e.target.value }) };

  ///

  handleTypeSelect = (e) => {this.setState({ type: e.target.value })}
  handleColorSelect = (e) => {this.setState({ color: e.target.value })}
  handleWeightSelect = (e) => {this.setState({ weight: e.target.value })}

  handleQuantitySelect = (e) => {this.setState({ quantity: e.target.value })}

  handleReviewerName = (e) => {this.setState({ reviewerName: e.target.value })}
  handleReviewText = (e) => {this.setState({ reviewText: e.target.value })}

  clickPreview = (e) => {
    this.setState({ currentImg: e.target })
  }

  clickProduct = (product) => {
    console.log(product);
  }

  returnProductsList = (productsList) => {
    //console.log(productsList)
    if (productsList.length != 0) {

      var productsArray = [];
      for (var i =0; i <24; i++) {
        productsArray.push(
          <ProductPreview
              key={i}
              _id={productsList[i]._id}
              title= {productsList[i].title}
              img= {productsList[i].images[0]}
              price= {productsList[i].price}
              salePrice= {productsList[i].salePrice}
              clickFunc={() => this.clickProduct({ title: productsList[i].title, img: productsList[i].images[0], description: productsList[i].description, price: productsList[i].price, salePrice: productsList[i].salePrice })}
            />
        );
      }
      return productsArray;
    }
    else {
      return(
        <h3> Loading </h3>
      );
    }
  }     

  renderImagePreviews = () => {

    return this.state.productForSale.images.map((image, index) => {
      return (
        <ItemImgPreview 
          key={index}
          clickFunc={() => this.setState({ currentImage: image })}
          src={image}
          alt={image}
          width='100%' />
        );
    })
  }

  renderOptions = () => {
    var options = [];

    if (this.state.productForSale.options[0] != undefined) {
      options.push(
          <Select
            name={this.state.productForSale.options[0].name}
            options={this.state.productForSale.options[0].choices}
            selectedOption={this.state.option1}
            controlFunc={this.handleOption1Select}
          />
      );
    }
    if (this.state.productForSale.options[1] != undefined) {
      options.push(
          <Select
            name={this.state.productForSale.options[1].name}
            options={this.state.productForSale.options[1].choices}
            selectedOption={this.state.option2}
            controlFunc={this.handleOption2Select}
          />
      );
    }
    if (this.state.productForSale.options[2] != undefined) {
      options.push(
          <Select
            name={this.state.productForSale.options[2].name}
            options={this.state.productForSale.options[2].choices}
            selectedOption={this.state.option3}
            controlFunc={this.handleOption3Select}
          />
      );
    }
    if (this.state.productForSale.options[3] != undefined) {
      options.push(
          <Select
            name={this.state.productForSale.options[3].name}
            options={this.state.productForSale.options[3].choices}
            selectedOption={this.state.option4}
            controlFunc={this.handleOption4Select}
          />
      );
    }
    if (this.state.productForSale.options[4] != undefined) {
      options.push(
          <Select
            name={this.state.productForSale.options[4].name}
            options={this.state.productForSale.options[4].choices}
            selectedOption={this.state.option5}
            controlFunc={this.handleOption5Select}
          />
      );
    }

    return options.map((renderOption, index) => {
      return (
        <div key={index}>
          {renderOption}
          &nbsp;
        </div>
      );
    });
  }
  
  render() {
    return (
      <article>
        <Helmet>
          <title>Product Page</title>
          <meta name="description" content="Description of Product Page" />
        </Helmet>
      
      <PageContainer style={{
        background: `url(${Woodsbackground})`,
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed',
      }}>>

        <BodyContainer>
          {/* 
          * product info
          */}

          <Wrapper style={{ flexWrap: 'wrap' }} >
            <LeftSection>
            
              <Img src={this.state.currentImage} alt={this.state.productForSale.title} width='90%'/>

              <WrapperCenterBottom>
                {this.renderImagePreviews()}
              </WrapperCenterBottom>

            </LeftSection>

            <RightSection>
              <H2> {this.state.productForSale.title} </H2>

              <WrapperCenter>
                <SectionSmall style={{background: 'none', minWidth: '45%', paddingLeft: '15%'}}>                 
                  {this.renderOptions()}
                </SectionSmall>

                <SectionSmall style={{background: 'none', minWidth: '45%'}}>
                  <h3> Overview </h3>
                  <p> {this.state.productForSale.overview} </p>
                </SectionSmall>
              </WrapperCenter>

              <WrapperCenter>
                <SectionSmall>
                  <Select 
                    name= {'Quantity'}
                    options= {[1,2,3,4,5,6,7,8,9]}
                    selectedOption= {this.state.quantity}
                    controlFunc= {this.handleQuantitySelect}
                  />
                </SectionSmall>
                &nbsp;
                <SectionSmall>
                  <RedText> ${this.state.productForSale.price * this.state.quantity} </RedText>
                  <div> ${this.state.productForSale.salePrice * this.state.quantity} </div>
                </SectionSmall>
                &nbsp;
                <SectionSmall>
                  <Button> Add To Cart </Button>
                </SectionSmall>
              </WrapperCenter>

            </RightSection>
            
          </Wrapper>
        </BodyContainer>

        {/* 
          * banner
          */}

        <Img src={banner_barnett} alt={'Barnett Banner'} width={'100%'} />

        {/* 
          * product Concept
          */}

        <BodyContainer>
          <H1> Product Concept </H1>
          <hr />
          <p> {this.state.productForSale.concept} </p> 
        </BodyContainer>

        <BodyContainer style={{ background: 'rgba(0, 0, 0, 0.65)', WebkitBoxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.65)', boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.65)' }}>
          <WrapperLeft style={{ flexWrap: 'wrap' }}>
            <SectionSmall> <Button onClick={this.clickDescription}> Description </Button> </SectionSmall>
            <SectionSmall> <Button onClick={this.clickOurService}> Our Service </Button> </SectionSmall>
            <SectionSmall> <Button onClick={this.clickHowToOrder}> How To Order </Button> </SectionSmall>
            <SectionSmall> <Button onClick={this.clickShipping}> Shipping </Button> </SectionSmall>
          </WrapperLeft>

          <SectionMinHeight>
            {this.state.descriptionBoxInfo}
          </SectionMinHeight>
        </BodyContainer>

        {/* 
          * company Concept
          */}

        <BodyContainer>
          <H1> Company Concept </H1>
          <hr />
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
        </BodyContainer>

          {/* 
          * review section
          */}

        <BodyContainer style={{ background: 'rgba(0, 0, 0, 0.65)', WebkitBoxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.65)', boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.65)' }}>
          <h2>Current Reviews </h2>
          <WrapperLeft>
              <Button onClick={this.toggleReviewModal}> Write a Review </Button>
          </WrapperLeft>

          <Modal show={this.state.showReviewModal} onClose={this.toggleReviewModal}>
            <form onSubmit={() => {alert("reviewed")}}>
            <WrapperLeft>
              <section>
              <div> Your Name </div>
                <SingleInput
                  inputType={'text'}
                  title={'Reviewer Name'}
                  name={'ReviewerName'}
                  controlFunc={this.handleReviewerName}
                  content={this.state.reviewerName}
                />
              <br />
              </section>
              <section >
                <i className={'w-icon-star-off'} />
                <i className={'w-icon-star-off'} />
                <i className={'w-icon-star-off'} />
                <i className={'w-icon-star-off'} />
                <i className={'w-icon-star-off'} />
              </section>
            </WrapperLeft>
          
                <TextArea
                  title={'Review Text'}
                  rows={6}
                  cols={40}
                  name={'ReviewerText'}
                  controlFunc={this.handleReviewText}
                  content={this.state.reviewText}
                />

                {/* <input type='submit' value='Submit Review' /> */}
                  <Button form=''> Submit </Button>
            </form>
          </Modal>
          
          <p> 0 out of 0 Reviews </p>
          <p> Be the first to write a review! </p>
        </BodyContainer>

        {/* 
          * related products
          */}

        <BodyContainer>
          <H2> Related Products </H2>
          <Wrapper>
            <Section style={{ width: '100%'}}>
              <Carousel className={'hot-products'} slidesToShow={this.state.viewportWidth/316} slidesToScroll={'auto'} framePadding={'1em 1.5em'}  initialSlideHeight={400} >
                  {this.returnProductsList(this.state.relatedProducts)}
              </Carousel>
            </Section>
          </Wrapper>
        </BodyContainer>
        
      </PageContainer>
      </article>
    );
  }
}

export default ProductPage;

/*
ProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productpage: makeSelectProductPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'productPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(ProductPage);
*/