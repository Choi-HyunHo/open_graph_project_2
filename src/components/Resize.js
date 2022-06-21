import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgOne from './ImgOne';
import ImgTwo from './ImgTwo';

const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Resize = ({ src, width, height, title, desc, url }) => {
  const [attr, setAttr] = useState({});

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const fixSize = height / width;
      const targetSize = img.height / img.width;
      const isTargetVerticalRatioBig = targetSize > fixSize;
      const attr = {};
      // 타겟이미지 비율이 고정 비율 보다 큰지 체크한다.
      if (isTargetVerticalRatioBig) {
        const vetticalRatio = (img.height / img.width - 1) / 2;
        // 세로이미지인 경우 세로 비율에 따라 세로의 포커스 지점을 설정한다.
        // 최대 비가 2배일 경우 50%만큼 내려간다.
        if (vetticalRatio > 0) {
          const weigth = (width / 100) * (vetticalRatio * 100);
          // attr.style = { position: 'absolute', top: `-${weigth}px`, left: 0, bottom: 0, right: 0 };
        }
        attr.width = width;
      } else {
        attr.width = 108;
        attr.height = height;
      }
      setAttr(attr);
    };
    img.onerror = () => {
      setAttr({ width: 100 });
    };
  }, [height, src, width]);

  if (attr.width > 300) {
    return (
      <ImgDiv>
        <ImgOne src={src} title={title} desc={desc} url={url} />
      </ImgDiv>
    );
  } else {
    return (
      <ImgDiv>
        <ImgTwo src={src} title={title} desc={desc} url={url} />
      </ImgDiv>
    );
  }
};

Resize.defaultProps = {
  width: 108,
  height: 72,
};

export default Resize;
