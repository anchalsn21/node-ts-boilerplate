import { Schema, Model, model, Document } from "mongoose";
const document_name = "User";
const collection_name = "users";

export interface IUser {
  email: string;
  password: string;
}

export interface IUserDocument extends Document, IUser {}

export interface IUserModel extends Model<IUserDocument> {}

const userSchema: Schema = new Schema(
  {
    email: { type: String, require: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User: IUserModel = model<IUserDocument, IUserModel>(
  document_name,
  userSchema,
  collection_name
);

export { User };
