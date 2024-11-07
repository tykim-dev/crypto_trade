'use strict'

import { RestClientV2 } from "bitget-api";

type TradeBitgetProps = {
  apiKey: string,
  apiSecret: string,
  apiPass: string,
} 

const TradeBitget = async ({apiKey, apiSecret, apiPass}: TradeBitgetProps) => {
  const client = new RestClientV2({
    apiKey: apiKey,
    apiSecret: apiSecret,
    apiPass: apiPass,
  });

  return client.getSpotAccount().then((res) => {
    return res;
  }).catch((error) => {
    return error?.body;
  });
}

export default TradeBitget;