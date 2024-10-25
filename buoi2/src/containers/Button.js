import { Context } from "./Context";
import { useContext, useEffect} from "react";
export default function Button() {
    const {isLogin, isData}  = useContext(Context);
    useEffect(() => {
      if (isData) {
        console.log(`Data has changed: ${JSON.stringify(isData.role)}`);
      }
    }, [isData]);


    console.log(`STATUS123: ${isLogin}`)
    return (
      <>
        {!isLogin ? (
          <div className="absolute top-1/4 left-1/3 text-red-500">
            <p>Chưa đăng nhập</p>
          </div>
        ) : (
          <div className="absolute top-1/4 left-1/3 text-green-500">
            <p>Đã đăng nhập</p>
          </div>
        )}
      </>
    );
  }
  