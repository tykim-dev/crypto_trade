import { models, model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  apiKey: {
    type: String,
  },
//   role: {
//     type: String
//   }
});

const UserModel = models.User || model('User', UserSchema, "user");

export default UserModel