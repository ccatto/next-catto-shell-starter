// import FooterLinksTopCatto from './FooterLinksTopCatto';
// import FooterLinksBottomCatto from './FooterLinksBottomCatto';

const FooterCatto = () => {
  return (
    <>
      <footer className="w-full bg-white p-6 dark:bg-gray-900 m-4 rounded-2xl">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {new Date().getFullYear()}{' '}
          <a href="https://www.ChrisCatto.com/" className="hover:underline">
            ChrisCatto.com™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default FooterCatto;
