'use strict'

import { RestClientV2 } from "bitget-api";

const trade = async (apiInfo: any) => {
  const client = new RestClientV2({
    apiKey: apiInfo.apiKey,
    apiSecret: apiInfo.apiSecret,
    apiPass: apiInfo.apiPass,
  });

  return client.getSpotAccount().then((res) => {
    return res;
  }).catch((error) => {
    return error?.body;
  });
}

const trade2 = async (apiInfo: any) => {
  return {code: '00000', msg: '테스트 입니다.'};
}

export {trade, trade2};