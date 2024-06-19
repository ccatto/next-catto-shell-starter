import NavLinksCatto from './NavLinksCatto';

const NavMobileCatto = () => {
  return (
    <>
      <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
        <div className="flex items-center justify-between mx-auto p-4">
          <div className="flex-[25%]">
            <h1 className="dark:text-blue-400">SiteName</h1>
          </div>
          <div className="flex-[75%] flex justify-end">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
            {/* <NavLinksCatto /> */}
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavMobileCatto;
