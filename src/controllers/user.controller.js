import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists : username and email
  // check for images, check for Avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in DB
  // remove password and refresh token field
  // check for user creation
  // return response
})

export {registerUser}