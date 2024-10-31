'use strict'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from "next/server"
import connectDB from '@/app/utils/database';
import UserModel from '@/app/models/user.model';
import UserApiModel from '@/app/models/user_api.model';
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  await connectDB();

  const body = await request.json();;
  
  const userInfo = await UserModel.findOne({apiKey: body.apiKey});
  const userApiInfo = await UserApiModel.findOne({user: userInfo._id, 'apiInfos.platform': body.platform})
  // .populate('apiInfos')
  // .exec()
  ;
  // const apiInfo = await userApiInfo.apiInfos.findOne({platform: body.platform});
    // .populate({path:'apiInfos', match: {platform: body.platform}});
console.log(userApiInfo);
  // // const doc = await UserModel.findOneAndUpdate({email: 'xodus776@nate.com'}, {apiKey: salt}, {new: true});

  // // console.log(doc);
  // // const hash = bcrypt.hashSync("q", salt);
  // // const hash = bcrypt.hashSync(myPlaintextPassword, salt);

  // const userInfo = await UserModel.findOne();
  
  // const userApiInfo = await UserApiModel.findOne({user: userInfo._id});
  
  return NextResponse.json(userApiInfo)
}
