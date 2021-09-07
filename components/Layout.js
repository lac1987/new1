import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Filipino</span>
              <span>Foods and Drink</span>
            </h1>
            <h2>Filipino Cousine</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021:)</p>
      </footer>
    </div>
  )
}