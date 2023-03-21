import Header from '../components/Header.js'

export const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container mx-auto">{children}</div>
  </>
)
