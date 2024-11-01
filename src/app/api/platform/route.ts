'use strict'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from "next/server"
import connectDB from '@/app/utils/database';
import UserModel from '@/app/models/user.model';
import UserApiModel from '@/app/models/user_api.model';
import bcrypt from "bcrypt";
import trade from './bitget/route';

export async function POST(request: NextRequest) {
  await connectDB();

  const body = await request.json();;
  
  const userInfo = await UserModel.findOne({apiKey: body.apiKey});
  const userApiInfo = await UserApiModel.findOne({user: userInfo._id}, {apiInfos: {$elemMatch: {platform: body.platform}}})
  const bInfo = await trade(userApiInfo.apiInfos[0]);

  return NextResponse.json(bInfo)
}
