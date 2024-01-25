import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/register").post(
    // For Multiple image upload we use multer field
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)
export default router


//login user route
router.route("/login").post(
    loginUser
)

//Secured Routes here verifyJWT is middleware and logout user is function
router.route("/logout").post(verifyJWT,logoutUser)