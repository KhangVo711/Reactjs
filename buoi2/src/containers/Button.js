export default function Button() {
    const isLogin = false;
  
    return (
      <>
        {!isLogin ? (
          <div className="absolute top-1/2 left-1/3 text-red-500">
            <p>Chưa đăng nhập</p>
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/3 text-green-500">
            <p>Đã đăng nhập</p>
          </div>
        )}
      </>
    );
  }
  