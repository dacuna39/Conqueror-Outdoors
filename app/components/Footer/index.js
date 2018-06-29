import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import H2 from 'components/H2';

const FooterContainer = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #eee;
`;

const H = styled.p`
  font-size: 2.5em;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      {/*}
      <Wrapper>
        <section>
          <LocaleToggle />
       </section>
      </Wrapper>
      */}
    <Wrapper style={{ flexWrap: 'wrap' }}>
      <H> (Conqueror Outdooors) </H>
      <p> Tel: 1-562-524-2002 <br /> <a style={{color: '#eee'}} href='mailto:Alanhe@conquerorcrossbow.com'> Alanhe@conquerorcrossbow.com </a> </p>
      <p>  721 West Whittier Blvd, Suite S <br /> La Habra, CA 90631, USA </p>
      <p> © 2018 Conqueror Outdoors. All Rights Reserved. </p>
    </Wrapper>
    </FooterContainer>
  );
}

export default Footer;
