import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  padding: 0 25px;
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  margin: 10px 0;
`;

const Header = ({ left, center, right }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{left}</HeaderTitle>
      <HeaderTitle>{center}</HeaderTitle>
      <HeaderTitle>{right}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
