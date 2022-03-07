import axios from "axios";
import { get } from "lodash";

const server = axios.create({
  baseURL : 'https://api.github.com/',
  timeout:3000
})
const flag = true
export const getData = (params) =>(
  server({
    method:'get',
    url:`/search/repositories?q=${params.test}`
  }).then(res=>res)
  
)
  


    
// export const data = {
//   data1:[
//     {
//       key:'asdfgdh',
//       title:'数据1'
//     },
//     {
//       key:'abcdef',
//       title:'数据2'
//     },
//     {
//       key:'ouhjhb',
//       title:'数据3'
//     },
//     {
//       key:'muhyddf',
//       title:'数据4'
//     },
//   ]
// }