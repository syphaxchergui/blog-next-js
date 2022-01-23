import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className='mx-auto w-10/12 sm:w-9/12 lg:8/12 '>
      <header className=''>
        <h1 className='text-6xl font-bold text-center mt-8 mb-6'>My Blog</h1>
        <nav>
          <ul className='flex justify-center space-x-4'>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
