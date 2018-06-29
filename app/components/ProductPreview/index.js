import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/Button';
import Link from 'components/Link';

const RedPrice = styled.div`
    color: #b22222;
    text-decoration: line-through;
`;

const A = styled.a`
    color: #eee;
    text-decoration: none;

`;

//float: left;
const Container = styled.div`
    text-align: center;
    font-weight: bold;
    background: none;
    margin: 0.5em 0;
    padding: 0.5em;
    
    max-width: 16em;
    min-width: 10em;

    height: 23em;
`;

const ImageContainer = styled.div`
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    width: 230px;
    height: 230px;
`;

function ProductPreview (props) {

    var price = props.price
    if (typeof price == 'string'){
        price = parseInt(price);
    }

    var salePrice = props.salePrice
    if (typeof salePrice == 'string'){
        salePrice = parseInt(salePrice);
    }

    if (window.location.href.includes('product')){ //if its on the product page, refresh the page with an a tag (change this later!)
        return(
            <Container>
                <A href={'/product/' + props._id}>
                    <ImageContainer>
                       <img src={props.img} alt={props.title} width='100%' />
                    </ImageContainer>
                
                    <div> {props.title} </div>
                    <RedPrice> ${price} </RedPrice>
                    <div> ${salePrice} </div>
                </A>
                <Button onClick={props.clickFunc}> Add To Cart </Button>
                
            </Container>
        );
    }
    else { // if not on product page, go to product page
        return(
            <Container>
                <Link to={'/product/' + props._id}>
                <ImageContainer>
                    <img src={props.img} alt={props.title} width='100%' />
                </ImageContainer>
                
                <div> {props.title} </div>
                <RedPrice> ${price} </RedPrice>
                <div> ${salePrice} </div>
            </Link>
                <Button onClick={props.clickFunc}> Add To Cart </Button>
                
            </Container>
        );
    }
}

ProductPreview.propTypes = {
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
    ]),
    salePrice: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
    ]),
    clickFunc: PropTypes.func,
  };

export default ProductPreview;