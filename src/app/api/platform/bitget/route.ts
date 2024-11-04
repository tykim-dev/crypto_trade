'use strict'

import { RestClientV2 } from "bitget-api";

const TradeBitget = async (apiInfo: any) => {
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

export default TradeBitget;