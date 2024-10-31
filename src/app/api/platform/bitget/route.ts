'use strict'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from "next/server"
import connectDB from '@/app/utils/database';
import UserModel from '@/app/models/user.model';
import UserApiModel from '@/app/models/user_api.model';
import bcrypt from "bcrypt";
import { NextApiRequest } from 'next';

export async function GET(request: NextRequest) {
  await connectDB();
  const userInfo = await UserModel.findOne();
  
  const userApiInfo = await UserApiModel.findOne({user: userInfo._id});
  
  return NextResponse.json({userInfo, userApiInfo})
}

export async function POST(request: NextRequest) {
  await connectDB();

  const body = await request.json();;
console.log(body);
  // const userInfo = await UserModel.findOne();

  // // const doc = await UserModel.findOneAndUpdate({email: ''}, {apiKey: salt}, {new: true});

  // // console.log(doc);
  // // const hash = bcrypt.hashSync("q", salt);
  // // const hash = bcrypt.hashSync(myPlaintextPassword, salt);

  // const userInfo = await UserModel.findOne();
  
  // const userApiInfo = await UserApiModel.findOne({user: userInfo._id});
  
  return NextResponse.json(body)
}
