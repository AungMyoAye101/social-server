import { BadRequestError } from "../common/error"
import User from "../models/user.model"
import { successResponse } from "../utils/custom-response"
import { generateToken, setCookiesTokens } from "../utils/jwt"
import { registerType } from "../validation/auth.schema"
import bcrypt from "bcryptjs"

export const registerService = async ({ name, email, password }: registerType) => {

    const userExit = await User.findOne({ email })
    if (userExit) {
        throw new BadRequestError("Username or Email already exit!")
    }
    const hashed_password = await bcrypt.hash(password, 12)
    const user = new User({ password: hashed_password, name, email })

    const tokens = generateToken({
        userId: user._id.toString(),
        email: user.email,
    })

    user.refreshToken = tokens.refresh_token
    await user.save()
    return { user, tokens };


}