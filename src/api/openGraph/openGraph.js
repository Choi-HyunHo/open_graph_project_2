import { testinstance } from '..'

export const getOpenGraph = async (data) => {
  const url = `/getOpenGraph?baseURL=${data}`

  const response = await testinstance
    .get(url, null, {
      headers: {
        // CORS 인증 : 교차 출처 리소스 공유
        // 실행 중인 웹 애플리케이션이 다른 출처의 자원에 접근 할 수 있는 권한을 부여하도록 알리는 것
        Authorization: 'Basic cm96ZXVzOnJvemV1czEyMyE=',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response
    })
  console.log(data)
  return response
}
