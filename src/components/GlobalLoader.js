import { useSelector } from "react-redux";

const GlobalLoader = () => {
  const loading = useSelector((store) => store.loader.loading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-500 border-t-red-600"></div>
    </div>
  );
};

export default GlobalLoader;
