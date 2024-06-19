import NavLinksCatto from './NavLinksCatto';

const NavCatto = () => {
  return (
    <>
      <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <div className="flex items-center justify-between mx-auto p-4">
          <div className="flex-[25%]">
            <h1 className="dark:text-blue-400">SiteName</h1>
          </div>
          <div className="flex-[75%] flex justify-end">
            <NavLinksCatto />
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavCatto;