import express from "express";
import bodyParser from "body-parser";
import "./controllers/LoginController";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());

app.listen(3000, () => console.log("listening on port 3000"));
