import { User, IUserDocument } from "../models/user.model";
import { BadRequestError } from "../utility/api_error";

class AuthService {
  constructor(private user = User) {}

  public async signUp(userDto: any) {
    try {
      let { email, password } = userDto;
      let exist: IUserDocument | null = await User.findOne({
        email: email.toLowerCase(),
      });
      if (exist) throw new BadRequestError("User already Exist");
      const user: any = await new User(userDto);
      await user.save();
      return { user: user };
    } catch (error: Error) {
      console.log({ error });
      throw new BadRequestError(error.message);
    }
  }

  public async login(userDto: any) {
    try {
      let { email, password } = userDto;
      let user = await User.findOne({ email: email.toLowerCase() });
      if (!user) throw new Error();
      return { user: userDto };
    } catch (error: Error) {
      console.log({ error });
      throw new BadRequestError(error.message);
    }
  }

  public async logout(userDto: any) {
    try {
      console.log(userDto);
      return { user: userDto };
    } catch (error: Error) {
      console.log({ error });
      throw new BadRequestError(error.message);
    }
  }

  public async getCurrentUser(userId: string) {
    try {
      const user = await User.findOne({ _id: userId });
      return { user };
    } catch (error: Error) {
      console.log({ error });
      throw new BadRequestError(error.message);
    }
  }
  //getAllUsers

  public async getAllUsers() {
    try {
      const users: any = await User.find({});
      return { users };
    } catch (error: Error) {
      console.log({ error });
      throw new BadRequestError(error.message);
    }
  }
}

export { AuthService };
