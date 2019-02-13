import { request } from 'graphql-request'

const DEFAULT_URL = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr'

export default ({ query, variables = {}, endpoint = DEFAULT_URL }) => {
  return request(endpoint, query, variables)
    .catch(err => {
      console.log("[Failed fetch] error: ", err)
      return {
        data: '',
        status: 'error'
      }
    })
}