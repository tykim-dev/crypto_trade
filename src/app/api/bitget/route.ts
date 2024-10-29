'use strict'

import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {

  return NextResponse.json({word1: 0})
}

export async function POST(request: NextRequest) {

  return NextResponse.json({word1: 1})
}
