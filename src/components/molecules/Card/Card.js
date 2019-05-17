import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Link from 'assets/icons/link.svg';

const Wrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsl(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 380px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 4;
  position: relative;
  :first-of-type {
    z-index: 999;
  }
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledButton = styled(Button)`
  margin-bottom: 10px;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  position: absolute;
  top: 25px;
  right: 25px;
  border-radius: 50%;
`;

const StyledLinkIcon = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: white url(${Link}) no-repeat;
  background-size: contain;
  position: absolute;
  top: 20px;
  right: 25px;
  background-size: 60%;
  background-position: 50%;
`;

const Card = ({ cardType }) => {
  return (
    <Wrapper>
      <InnerWrapper activeColor={cardType}>
        <StyledHeading>Hello vapaus</StyledHeading>
        <DateInfo>3 days</DateInfo>
        {cardType === 'twitter' && <StyledAvatar src="https://avatars.io/twitter/vitalikbuterin" />}
        {cardType === 'article' && <StyledLinkIcon href="https://www.ethereum.org/" />}
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>
          Labore eu ullamco eiusmod ex laboris occaecat voluptate non duis. Id deserunt aute laborum
          excepteur enim. Anim Lorem laborum reprehenderit est qui aute Lorem proident.
        </Paragraph>
        <StyledButton secondary>REMOVE</StyledButton>
      </InnerWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  cardType: propTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
