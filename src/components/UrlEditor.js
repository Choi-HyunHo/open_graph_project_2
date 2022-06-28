// import { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { getOpenGraph } from '../api/openGraph/openGraph';

const UrlInputContainer = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const UrlInputStyle = styled.input`
  width: 35vw;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  &::placeholder {
    font-size: 20px;
  }
  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  text-align: center;
  margin-top: 30px;
  width: 35vw;
  height: 5vh;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px rgba(128, 128, 128, 0.4);
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const UrlEditor = ({ onCreate }) => {
  // URL data
  const [urlData, setUrlData] = useState('');

  const handleSubmit = () => {
    getOpenGraph(urlData).then((response) => {
      if (response.data === '') {
        alert('URL 전부 입력하세요');
      } else {
        onCreate(response.data);
      }
    });
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      getOpenGraph(urlData).then((response) => {
        if (response.data === '') {
          alert('URL 전부 입력하세요');
        } else {
          onCreate(response.data);
        }
      });
    }
  };

  return (
    <>
      <UrlInputContainer>
        <UrlInputStyle
          type="url"
          placeholder="https://"
          value={urlData}
          onChange={(e) => {
            setUrlData(e.target.value);
          }}
          onKeyDown={handleEnter}
        />
      </UrlInputContainer>
      <BtnBox>
        <SubmitBtn onClick={handleSubmit}>확인</SubmitBtn>
      </BtnBox>
    </>
  );
};

export default UrlEditor;
