import styled from 'styled-components';
const OneStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const Title = styled.h4`
  font-size: 20px;
  margin: 10px 0;
`;

const Desc = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
`;

const Url = styled.span`
  font-size: 14px;
  display: block;
  margin: 20px 0 0 0;
`;

const ImgOne = ({ src, title, desc, url }) => {
  return (
    <OneStyle>
      <img src={src} alt=""></img>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Url>{url}</Url>
    </OneStyle>
  );
};

export default ImgOne;
