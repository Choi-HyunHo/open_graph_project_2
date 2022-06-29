import { instance ,testinstance } from '..'

export const getOpenGraph = async (data) => {
  const url = `/getOpenGraph?baseURL=${data}`

  const Response = await testinstance
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
    .catch((error) => {
      return console.log(error)
    })
  return Response

  // const param = {
  //   headers: {
  //     Authorization: 'Basic cm96ZXVzOnJvemV1czEyMyE=',
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //   },
  // }
  // const Response = await testinstance.get(url, null, param).then((response) => {
  //   return response.data
  // })

  //return Response
}
