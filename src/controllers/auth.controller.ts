import { User } from "../models/user.model";
import { AuthService } from "../services/auth.services";
import { ISignUpDto, ILoginDto } from "../interfaces/auth.interfaces";

class AuthController {
  public async signUp(req: any, res: any, next: any) {
    let signUpDto: ISignUpDto = req.body;
    const { user } = await new AuthService().signUp(signUpDto);
    return res.send({ user });
  }

  public async login(req: any, res: any, next: any) {
    let loginDto: ILoginDto = req.body;
    const { user } = await new AuthService().login(loginDto);
    return res.send({ user });
  }

  public async logout(req: any, res: any, next: any) {
    const { user } = await new AuthService().logout(req.body);
    return res.send({ user });
  }

  public async getCurrentUser(req: any, res: any, next: any) {
    const { user } = await new AuthService().getCurrentUser(req.body);
    return res.send({ user });
  }
  //getAllUsers
  public async getAllUsers(req: any, res: any, next: any) {
    const { users } = await new AuthService().getAllUsers();

    return res.send({ users });
  }
}

export { AuthController };
