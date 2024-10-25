import { Context } from "./Context";
import { useContext,} from "react";
export default function Profile() {
    const {isLogin, isData}  = useContext(Context);



    console.log(`STATUS123: ${isLogin}`)
    return (
      <>
        {!isData ? (
          <div className="absolute top-1/4 left-1/3 text-red-500">
            <p>Chưa đăng nhập</p>
          </div>
        ) : (
          <div className="absolute top-1/3 left-1/3">
            <p>Username: {JSON.stringify(isData.username)}</p>
            <p>Fullname: {JSON.stringify(isData.fullname)}</p>
            <p>Email: {JSON.stringify(isData.email)}</p>
            <p>Address: {JSON.stringify(isData.address)}</p>
            <p>Sex: {JSON.stringify(isData.sex)}</p>
          </div>
        )}
      </>
    );
  }
  