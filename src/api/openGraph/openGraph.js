import { testinstance } from '..'

export const getOpenGraph = async (data) => {
  const url = `/getOpenGraph?baseURL=${data}`

  const response = await testinstance
    .get(url, null, {
      headers: {
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
