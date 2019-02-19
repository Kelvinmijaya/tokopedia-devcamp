import { request } from 'graphql-request'

const DEFAULT_URL = 'https://devcamp-gql.herokuapp.com/graphql'

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