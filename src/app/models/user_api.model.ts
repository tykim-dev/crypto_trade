import { models, model, Schema } from 'mongoose';
import { unique } from 'next/dist/build/utils';

// 정답 선택 스키마
const ApiInfoSchema = new Schema({
  platform: {
    type: String,
    required: true,
    unique: true,
  },
  apiKey: {
    type: String,
    required: true,
  },
  apiSecret: {
    type: String,
    required: true,
  },
  apiPass: {
    type: String,
    required: true,
  },
});

const UserApiSchema: Schema = new Schema({
  user: {
    type: Schema.ObjectId,
    required: true,
    unique: true,
  },
  apiInfos: [ApiInfoSchema]
});

const UserApiModel = models.UserApi || model('UserApi', UserApiSchema, "user_api");

export default UserApiModel