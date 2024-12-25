import express from 'express';
import { acceptFriendRequest, forgetPassword, getMyFriends, getMyNotifications, getMyProfile, login, logout, newUser, resetPassword, searchUser, sendFriendRequest } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
import { singleAvatar } from '../middlewares/multer.js';
import { acceptRequestValidator, loginValidator, registerValidator, sendRequestValidator, validateHandler } from '../lib/validators.js';
const app = express();
const router = express.Router();

router.post('/login', loginValidator(), validateHandler,login);
router.post("/new",singleAvatar,registerValidator(), validateHandler,newUser);
router.post("/forgetpassword",validateHandler,forgetPassword);
router.post("/resetpassword",validateHandler,resetPassword);

router.use(isAuthenticated);

router.get("/me",getMyProfile);
router.get("/logout",logout)
router.get("/search",searchUser)

router.put(
    "/sendrequest",
    sendRequestValidator(),
    validateHandler,
    sendFriendRequest
  );
router.put(
    "/acceptrequest",
    acceptRequestValidator(),
    validateHandler,
    acceptFriendRequest
  );
router.get("/notifications", getMyNotifications);
  
router.get("/friends", getMyFriends);

export default router;
