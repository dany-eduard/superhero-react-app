import Navbar from 'components/Navbar'
import { ReactNode } from 'react'

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
