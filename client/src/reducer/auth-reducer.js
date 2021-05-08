import jwt from "jsonwebtoken";
import { authCheck, authUpdate } from "./util";

const initialState = {
  userName: "",
  token: "",
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_UPDATE":
      const token = jwt.sign(
        {
          username: action.username,
        },
        "privateKey",
        { expiresIn: 60 * 60 }
      );
      authUpdate(token);
      return {
        ...state,
        userName: action.username,
        token: token,
        isAuth: true,
      };
    case "USER_LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        userName: "",
        token: "",
        isAuth: false,
      };
    case "AUTH_CHECK":
      const accessToken = authCheck();
      if (accessToken) {
        const { username } = jwt.decode(accessToken, "privateKey");
        return {
          ...state,
          userName: username,
          token: accessToken,
          isAuth: true,
        };
      } else {
        return {
          ...state,
          userName: "",
          token: "",
          isAuth: false,
        };
      }
    default:
      return state;
  }
};

export default reducer;
