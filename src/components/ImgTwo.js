import styled from 'styled-components';
const TwoStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 570px;
  height: 300px;
  @media (max-width: 650px) {
    width : 400px;
    height: 100px;
  }
`;

const TwoStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media (max-width: 650px) {
    width : 200px;
    margin-left : 15px;
  }
`;

const TwoStyleBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    width : 200px;
  }
`;

const Title = styled.h4`
  font-size: 20px;
  margin: 10px 0 20px;
  @media (max-width: 650px) {
    font-size: 15px;
    margin: 1px 0 5px 0 ;
  }
`;

const Desc = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
  @media (max-width: 650px) {
    width : 100%;
    font-size: 13px;
    margin-bottom: 1px;
  }
`;

const Img = styled.img`
  display: inline-block;
  width: 50%;
  @media (max-width: 650px) {
    width: 100px;
    height : 100px;
  }
`;

const Url = styled.span`
  font-size: 14px;
  display: block;
  margin: 20px 0 0 0;
  @media (max-width: 650px) {
    margin: 3px 0 0 0;
    font-size: 13px;
  }
`;

const ImgTwo = ({ src, title, desc, url }) => {
  return (
    <TwoStyle>
      <Img src={src} alt=""></Img>
      <TwoStyleContainer>
        <Title>{title}</Title>
        <TwoStyleBox>
          <Desc>{desc}</Desc>
          <Url>{url}</Url>
        </TwoStyleBox>
      </TwoStyleContainer>
    </TwoStyle>
  );
};

export default ImgTwo;
