import axios from "axios";


export const handleCallApiLogIn = async (value) => {
     try {
          const result = await axios.post(
              "http://localhost:8080/api/public/signIn", value);
          return result.data;
     } catch (e) {
          console.log(e);
     }
};
export const handleCallApiToCreateAccountFb = async (value) => {
     try {
          return await axios.post(
              "http://localhost:8080/api/public/login-facebook",
              value
          );
     } catch (e) {
          return { error: e };
     }
};
