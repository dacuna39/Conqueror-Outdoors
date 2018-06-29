import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'components/Img';

const Preview = styled.div`
  margin: 0.5em;
  cursor: pointer;
  max-width: 64px;
`;

const ItemImgPreview = (props) => {
    return (
        <Preview onClick={props.clickFunc}>
            <Img src={props.src} alt={props.alt} width={props.width} height={props.height} />
        </Preview>
    );
}

ItemImgPreview.propTypes = {
    clickFunc: PropTypes.func,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default ItemImgPreview;