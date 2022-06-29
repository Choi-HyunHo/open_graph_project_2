import styled from 'styled-components';
const OneStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  @media (max-width: 650px) {
    width : 400px;
    flex-direction: row;
  }
`;

const Img = styled.img`
  @media (max-width: 650px) {
    width: 100px;
    height : 100px;
  }
`

const ContentBox = styled.div`
  display: flex;
  flex-direction : column;
  @media (max-width: 650px) {
    margin-left : 20px;
  }
`

const Title = styled.h4`
  font-size: 20px;
  margin: 10px 0;
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

const Url = styled.span`
  font-size: 14px;
  display: block;
  margin: 20px 0 0 0;
  @media (max-width: 650px) {
    margin: 3px 0 0 0;
    font-size: 13px;
  }
`;

const ImgOne = ({ src, title, desc, url }) => {
  return (
    <OneStyle>
      <Img src={src} alt=""></Img>
      <ContentBox>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Url>{url}</Url>
      </ContentBox>
    </OneStyle>
  );
};

export default ImgOne;
