import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  padding: 14px;
`;

const TitleInput = styled.input`
  padding: 5px;
  font-size: 15px;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 15px;
    font-weight: bold;
    opcatiy: 0.5;
  }
`;

const Title = () => {
  return (
    <TitleContainer>
      <TitleInput placeholder="제목을 입력하세요" />
    </TitleContainer>
  );
};

export default Title;
