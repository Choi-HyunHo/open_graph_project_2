import styled from 'styled-components';
const TwoStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 570px;
  height: 300px;
`;

const TwoStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TwoStyleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 20px;
  margin: 10px 0 20px;
`;

const Desc = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  display: inline-block;
  width: 50%;
  // height: 200px;
`;

const Url = styled.span`
  font-size: 14px;
  display: block;
  margin: 20px 0 0 0;
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
