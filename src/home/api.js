import axios from 'axios';
import get from 'lodash/get';

const service = axios.create({
  baseURL: 'https://ossmobile.ifastps.com.cn/',
  timeout: 3000,
});

// app/banner/get-home-banner-test.json

export const getStaticData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });

export const data = {
  news: [
    {
      type: '本周焦点',
      title: '人民币单边升级不可持续，双向波动抬高中枢',
    },
    {
      type: '投资周报',
      title: '20210621-20210625 鸽声嘹亮，红歌奏响',
    },
    {
      type: '市场动态',
      title: '白酒何以屡屡封神？',
    },
    {
      type: '奕丰组合',
      title: '20210621-20210625 鸽声嘹亮，红歌奏响',
    },
    {
      type: '奕丰管理',
      title: '20210621-20210625 鸽声嘹亮，红歌奏响',
    },
  ],
};
