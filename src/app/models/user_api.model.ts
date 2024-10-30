import { models, model, Schema } from 'mongoose';

const UserApiSchema: Schema = new Schema({
  user: Schema.ObjectId,
  market: {
    type: String,
    required: true,
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

const UserApiModel = models.UserApi || model('UserApi', UserApiSchema, "user_api");

export default UserApiModel