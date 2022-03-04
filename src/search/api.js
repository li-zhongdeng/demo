import axios from "axios";
import { get } from "lodash";

const server = axios.create({
  baseURL : 'https://api.github.com/',
  timeout:3000
})

export const searchRepository = ({ keyword }) =>
  server({
    method:'get',
    url:`/search/repositories?q=${keyword}`
  }).then(res => res.data.items);