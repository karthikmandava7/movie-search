import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black to-transparent m-4">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
    </div>
  );
};

export default Header;
