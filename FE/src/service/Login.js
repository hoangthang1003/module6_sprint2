import axios from "axios";
import Swal from "sweetalert2";


export const handleCallApiLogIn = async (value) => {
     try {
          const result = await axios.post(
              "http://localhost:8080/api/public/signIn", value);
          await Swal.fire({
               title: 'Thông báo',
               text: 'Đăng nhập thành công!',
               icon: 'info',
               confirmButtonText: 'OK'
          })
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
