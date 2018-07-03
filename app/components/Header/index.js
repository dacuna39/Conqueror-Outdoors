import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Link from 'components/Link';
import 'uiw-iconfont/fonts/w-iconfont.css';

import Button from 'components/Button';
import Modal from './Modal';
import Icon from 'components/Icon';

import SingleInput from 'components/FormComponents/SingleInput';
import Img from './Img';
import Section from './Section';
import OuterSection from './OuterSection';
import Wrapper from './Wrapper';

// images
import cartIcon from 'images/cart-icon.png';

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 6em;
  background: linear-gradient( rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0));
  color: #eee;
  padding-top: 1em;
`;

const HeaderText = styled.div`
  font-size: 100%;
  color: #fff;
`;

const P = styled.p`
  font-size: 2em;
  margin: 0 auto;
`;

const MiniWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  margin: 0.5em;
  background: rgba(200,200,200,0.5);
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      showSignInModal: false,
      showMenuModal: false,

      username: '',
      password: '',

      viewportWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.setState({ viewportWidth: window.innerWidth }, () => console.log('viewport width', this.state.viewportWidth));
  }

  toggleSignInModal = () => this.setState({showSignInModal: !this.state.showSignInModal}, () => console.log(this.state.showSignInModal))
  toggleMenuModal = () => this.setState({showMenuModal: !this.state.showMenuModal}, () => console.log(this.state.showMenuModal))


  handleSearchInput = (e) => { this.setState({ searchInput: e.target.value }) };
  handleUsernameInput = (e) => { this.setState({ username: e.target.value }) };
  handlePasswordInput = (e) => { this.setState({ password: e.target.value }) };
  
  render() {

    if (this.state.viewportWidth > 950){ //return fullsize header
      return (
        <div>
  
        <Modal show={this.state.showSignInModal} onClose={this.toggleSignInModal} >
            <h1> Sign In </h1>
            <hr />
            <SingleInput
              inputType={'text'}
              title={' '}
              name={'username'}
              controlFunc={this.handleUsernameInput}
              content={this.state.username}
              placeholder={'UserName'}
            />
            <SingleInput
              inputType={'password'}
              title={' '}
              name={'password'}
              controlFunc={this.handlePasswordInput}
              content={this.state.password}
              placeholder={'password'}
            />
            <br />
            <Button> Sign In </Button>
            <section> <Link to='#'> <p> Forgot Password? </p> </Link> </section>
            <section> <Link to='#'> <p> Create an Account </p> </Link> </section>
  
        </Modal>
  
        <HeaderContainer>
          <HeaderText>
            <Wrapper>
              <OuterSection>
                
                <Section> <Link to='/'> <P> Conqueror Outdoors </P> </Link> </Section>
                <Section> <Link to='/Shop'> <p> Shop </p> </Link> </Section>
                <Section> <Link to='/Media'> <p> Media </p> </Link> </Section>
              </OuterSection>
  
              <OuterSection>
                <Wrapper>
                  <Section> 
                    <SingleInput
                          inputType={'text'}
                          title={' '}
                          name={'search'}
                          controlFunc={this.handleSearchInput}
                          content={this.state.searchInput}
                          placeholder={'Search'}
                        />
                    <Icon className={'w-icon-search'} />
                  </Section>
                  <Section> <Button onClick={this.toggleSignInModal}> Sign In </Button> </Section> 
                  <Section> <Button> <MiniWrapper> Cart <Img src={cartIcon} alt={''} /> </MiniWrapper> </Button> </Section> 
                </Wrapper>
              </OuterSection>
  
            </Wrapper>
            
          </HeaderText>
        </HeaderContainer>
      </div>
      );
    }
    else { //return mini header
      return (
        <div>
          <Modal show={this.state.showMenuModal} onClose={this.toggleMenuModal} >
            <h3> Menu </h3>
              <NavItem onClick={this.toggleMenuModal} > <Link to='/Shop'> <label> Shop </label> </Link> </NavItem>
              <NavItem onClick={this.toggleMenuModal} > <Link to='/Media'> <label> Media </label> </Link> </NavItem>
              <NavItem onClick={this.toggleMenuModal} > <Link to='#'> <label> Sign In </label> </Link> </NavItem>
              <NavItem onClick={this.toggleMenuModal} > <Link to='#'> <label> Cart </label> </Link> </NavItem>
          </Modal>

          <HeaderContainer>
          <HeaderText>
            <Wrapper>
              <OuterSection>
                <Link to='/'> <P> Conqueror Outdoors </P> </Link>
              </OuterSection>

              <OuterSection onClick={this.toggleMenuModal}>
                <Icon className='w-icon-dot-chart' />
              </OuterSection>
            </Wrapper>
          </HeaderText>
          </HeaderContainer>
        </div>
      );
    }
  }
}

export default Header;
