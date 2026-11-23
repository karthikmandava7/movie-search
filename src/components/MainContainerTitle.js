const MainContainerTitle = ({ preview }) => {
  return (
    <div className="absolute w-1/4 m-4 pt-20 md:pt-40">
      <div>
        <h1 className="md:text-xl font-bold text-white m-2">{preview?.title}</h1>
        <p className="font-light text-left m-2 text-white hidden md:block">
          {preview?.overview}
        </p>
      </div>
      <div className="hidden md:block">
        <button className="m-2 py-1 px-6 bg-white rounded text-sm hover:opacity-70">
          {"▶ Play"}
        </button>
        <button className="m-2 py-1 px-6 bg-black opacity-70 rounded text-sm text-white">
          {"ℹ More"}
        </button>
      </div>
    </div>
  );
};

export default MainContainerTitle;
