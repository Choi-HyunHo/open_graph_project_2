import { useState, useEffect } from 'react'

const Resize = ({ src, width, height }) => {
  const [attr, setAttr] = useState({})
  // const [loading, setLoading] = useState(false);\
  // const [hasError, setHasError] = useState(false)
  // const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      const fixSize = height / width
      const targetSize = img.height / img.width
      const isTargetVerticalRatioBig = targetSize > fixSize
      const attr = {}
      // 타겟이미지 비율이 고정 비율 보다 큰지 체크한다.
      if (isTargetVerticalRatioBig) {
        const vetticalRatio = (img.height / img.width - 1) / 2
        // 세로이미지인 경우 세로 비율에 따라 세로의 포커스 지점을 설정한다.
        // 최대 비가 2배일 경우 50%만큼 내려간다.
        if (vetticalRatio > 0) {
          const weigth = (width / 100) * (vetticalRatio * 100)
          // attr.style = { position: 'absolute', top: `-${weigth}px`, left: 0, bottom: 0, right: 0 };
        }
        attr.width = width
      } else {
        attr.width = 108
        attr.height = height
      }
      setAttr(attr)
      //setLoading(true);

      console.log(img.width)
      console.log(img.height)
    }
    img.onerror = () => {
      setAttr({ width: 100 })
      //setHasError(true);
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
