import { body } from "express-validator";

export const usersValidate = [
  body("email", "Неверный формат почты").isEmail(),
  body("number", "Номер должен содержать только цифры").optional().isNumeric()
];
