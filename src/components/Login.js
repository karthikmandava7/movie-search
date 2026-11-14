import Header from "./Header";

const Login = () => {
  return (
    <div className="relativen h-screen items-center justify-center">
      <Header />
      <img
        src={
          "https://assets.nflxext.com/ffe/siteui/vlv3/12cedf4e-d9cf-4a31-b80f-7e6fbe4ef998/web/IN-en-20261109-TRIFECTA-perspective_12c44b81-de29-4047-ae67-40a52ffa45ba_large.jpg"
        }
        alt="image_1"
        className="h-screen"
      />
      <form className="absolute flex flex-col inset-0 m-auto w-3/12 h-fit bg-black p-5 rounded bg-opacity-75">
        <input
          placeholder="Enter Email"
          type="email"
          className="p-2 m-2 outline-none bg-gray-500 text-white rounded focus:border-white focus:border"
        />
        <input
          placeholder="Enter Password"
          type="password"
          className="p-2 m-2 outline-none bg-gray-500 text-white rounded focus:border-white focus:border"
        />
        <button className="p-2 m-2 bg-[#e40914] text-white rounded">
          {"Continue"}
        </button>
      </form>
    </div>
  );
};

export default Login;
