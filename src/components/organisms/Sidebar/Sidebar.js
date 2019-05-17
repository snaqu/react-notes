import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import bulbIcon from 'assets/icons/bulb.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Logo from 'assets/icons/logo.svg';

const SidebarWrapper = styled.div`
  width: 153px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
`;

const StyledLogo = styled.img`
  width: 50px;
  height: 50px;
  margin: 50px 0;
`;

const LogoutButton = styled(ButtonIcon)`
  position: absolute;
  bottom: 10px;
`;

const Sidebar = ({ sidebarType }) => {
  return (
    <SidebarWrapper activeColor={sidebarType}>
      <StyledLogo src={Logo} />
      <div>
        <ButtonIcon as={NavLink} exact activeClass="active" to="/" icon={penIcon} />
        <ButtonIcon as={NavLink} activeClass="active" to="/twitters" icon={twitterIcon} />
        <ButtonIcon as={NavLink} activeClass="active" to="/articles" icon={bulbIcon} />
      </div>
      <LogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  sidebarType: propTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  sidebarType: 'note',
};

export default Sidebar;
