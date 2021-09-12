import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  login(req: Request, res: Response): void {
    res.send("controller decorator - login");
  }

  @post("/login")
  @bodyValidator("email", "password")
  post(req: Request, res: Response): void {
    res.send("controller decorator - login");
  }
}
