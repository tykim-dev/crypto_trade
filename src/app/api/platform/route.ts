'use strict'
import { NextRequest, NextResponse } from "next/server"
import connectDB from '@/app/utils/database';
import UserModel from '@/app/models/user.model';
import UserApiModel from '@/app/models/user_api.model';
import bcrypt from "bcrypt";
import TradeBitget from './bitget/route';
import { isEmpty } from 'lodash';

export async function POST(request: NextRequest) {
  await connectDB();

  let result = {};

  const body = await request.json();;
  
  // 사용자 정보 조회
  const userInfo = await UserModel.findOne({apiKey: body.apiKey});

  // 사용자 정보가 있을 경우
  if(isEmpty(userInfo)) {
    result = {code: '99999', msg: '사용자 정보가 없습니다.'};
  } else {
    const userApiInfo = await UserApiModel.findOne({user: userInfo._id}, {apiInfos: {$elemMatch: {platform: body.platform}}})

    // 사용자의 거래소 API가 있을 경우
    if(isEmpty(userApiInfo) || isEmpty(userApiInfo.apiInfos)) {
      result = {code: '99999', msg: '등록된 거래소 API가 없습니다.'};
    } else {
      const resultProc = await TradeBitget(userApiInfo.apiInfos[0]);
      result = resultProc;
    }
  }

  return NextResponse.json(result)
}
