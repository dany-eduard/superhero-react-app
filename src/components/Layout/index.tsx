import { ReactNode } from 'react'

interface LayoutPorps {
  children: ReactNode
}

const Layout = ({ children }: LayoutPorps) => (
  <div>
    {/* NavBar */}
    <main>{children}</main>
  </div>
)

export default Layout
