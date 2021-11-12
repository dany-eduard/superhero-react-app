import { ReactNode } from 'react'
import Navbar from 'components/Navbar'

interface LayoutPorps {
  children: ReactNode
}

const Layout = ({ children }: LayoutPorps) => (
  <div>
    <Navbar />
    <main>{children}</main>
  </div>
)

export default Layout
