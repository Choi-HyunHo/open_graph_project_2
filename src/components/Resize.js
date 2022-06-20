import { useState, useEffect } from 'react'

const Resize = ({ src, width, height }) => {
  // const [loading, setLoading] = useState(false);
  const [attr, setAttr] = useState({})
  // const [hasError, setHasError] = useState(false)
  // const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      const attr = {}
      // const widthRatio = 3;
      // const heightRatio = 2;
      let width = img.width
      let height = img.height

      let maxWidth = 108
      let maxHeight = 72

      let resizeWidth = 0
      let resizeHeight = 0
      let resizeVal = 0

      let targetWidth = window.innerWidth * 0.49
      let targetHeight = window.innerWidth * 0.3

      resizeVal = targetWidth - img.width
      resizeWidth = img.width + resizeVal
      resizeHeight = img.height + (resizeVal * img.height) / img.width

      // 가로나 세로의 길이가 최대 사이즈보다 크면 실행
      if (width > maxWidth || height > maxHeight) {
        // 가로가 세로보다 크면 가로는 최대사이즈로, 세로는 비율 맞춰 리사이즈
        if (Math.round(width / height) <= 2 && Math.round(height / width) < 1) {
          //width > height

          if (resizeHeight < targetHeight) {
            resizeVal = targetHeight - resizeHeight
            resizeWidth = resizeWidth + resizeVal * (img.width / img.height + 1)
          } else {
            if (targetHeight * 2 < resizeHeight) {
              attr.position = 'center -30px'
            } else if (targetHeight + 50 < resizeHeight) {
              attr.position = 'center -20px'
            } else if (targetHeight + 30 < resizeHeight) {
              attr.position = 'center -10px'
            }
          }
          attr.size = resizeWidth + 'px auto'

          let ratio = (width / height).toFixed(2)
          attr.width = maxHeight * ratio
          attr.height = maxHeight
          // attr.style = { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, marginTop:'0%', };

          // 세로가 가로보다 크면 세로는 최대사이즈로, 가로는 비율 맞춰 리사이즈
        } else if (
          Math.round(width / height) > 1.3 &&
          Math.round(height / width) < 1
        ) {
          if (resizeHeight < targetHeight) {
            resizeVal = targetHeight - resizeHeight
            resizeWidth = resizeWidth + resizeVal * (img.width / img.height + 1)
          } else {
            if (targetHeight * 2 < resizeHeight) {
              attr.position = 'center -30px'
            } else if (targetHeight + 50 < resizeHeight) {
              attr.position = 'center -20px'
            } else if (targetHeight + 30 < resizeHeight) {
              attr.position = 'center -10px'
            }
          }
          attr.size = resizeWidth + 'px auto'

          let result = (height * resizeWidth) / width
          attr.height = Math.round(result)

          let ratio = (width / height).toFixed(2)
          attr.width = maxHeight * ratio
          attr.height = maxHeight

          attr.style = { position: 'absolute', top: 0, marginTop: '0%' }
        } else if (
          Math.round(height / width) <= 1.3 &&
          Math.round(width / height) < 1
        ) {
          // attr.height = maxHeight;
          // let result = (width * resizeHeight) / height;
          // attr.width = Math.round(result);
          // if(maxWidth - attr.width < 40){
          //     attr.width = maxWidth;
          // }else{
          //     attr.width = attr.width + 15;
          // }

          if (resizeHeight < targetHeight) {
            resizeVal = targetHeight - resizeHeight
            resizeWidth = resizeWidth + resizeVal * (img.width / img.height + 1)
          } else {
            if (targetHeight * 2 < resizeHeight) {
              attr.position = 'center -30px'
            } else if (targetHeight + 50 < resizeHeight) {
              attr.position = 'center -20px'
            } else if (targetHeight + 30 < resizeHeight) {
              attr.position = 'center -10px'
            }
          }
          attr.size = resizeWidth + 'px auto'

          let ratio = (height / width).toFixed(2)
          attr.width = maxWidth
          attr.height = maxWidth * ratio

          if (attr.height < maxHeight) {
            attr.width = maxWidth * 1.1
            attr.height = maxHeight * 1.1
          }

          // let pos = attr.height * ratio * 0.1;
          attr.style = { position: 'absolute', top: 0, marginTop: '0%' }
        } else {
          let ratio = (height / width).toFixed(2)
          if (ratio > 2) {
            attr.position = 'center -30px'
          }

          // if (resizeHeight < targetHeight) {
          //     resizeVal = targetHeight - resizeHeight;
          //     resizeWidth = resizeWidth+(resizeVal * ((img.width/img.height)+1));
          // }else {
          //     if ((targetHeight * 2) < resizeHeight) {
          //         attr.position = 'center -30px';
          //     } else if ((targetHeight+50) < resizeHeight){
          //         attr.position = 'center -20px';
          //     } else if ((targetHeight + 30) < resizeHeight) {
          //         attr.position = 'center -10px';
          //     }
          // }
          attr.size = resizeWidth + 'px auto'

          attr.width = maxWidth
          attr.height = maxWidth * ratio

          if (attr.height < maxHeight) {
            attr.width = maxWidth * 1.1
            attr.height = maxHeight * 1.1
          }
          //attr.style = { position: 'absolute', top: -10, marginTop:'0%'};
        }
        // 최대사이즈보다 작으면 원본 그대로
      } else {
        attr.width = img.width
        attr.height = img.height
      }

      // createImageBitmap(img, 0, 0, 32, 32);
      // createImageBitmap(img, 32, 0, 32, 32);
    }
    img.onerror = () => {
      setAttr({ width: 100 })
      //setHasError(true)
      //setLoading(true);
    }
  }, [height, src, width])

  return <img src={src} alt="" {...attr}></img>
}

Resize.defaultProps = {
  width: 108,
  height: 72,
}

export default Resize
