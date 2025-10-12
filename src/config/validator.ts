import { body } from "express-validator";

export const signupValidator = [
    body("email").isEmail().notEmpty().withMessage("Enter a valid email."),
    body("name").isLength({ min: 3 }).trim().notEmpty().withMessage("Name must be at least 3 chars"),
    body("password").isLength({ min: 6 }).trim().withMessage("Password must be at least 6 chars")
]

export const loginValidator = [
    body("email").isEmail().notEmpty().withMessage("Enter a valid email."),
    body("password").isLength({ min: 6 }).trim().withMessage("Password must be at least 6 chars")
]

export const postValidator = [body("content").trim().notEmpty().withMessage("Content is required.")]