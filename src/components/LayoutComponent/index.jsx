import { useState } from 'react'
import SidebarComponent from './SidebarComponent'
import HeaderComponent from './HeaderComponent'
import ContentBoxComponent from './ContentBoxComponent'

import { Layout } from 'antd'

const LayoutComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => setCollapsed(!collapsed)

  return (
    <Layout>
      <SidebarComponent collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderComponent toggle={toggle} collapsed={collapsed} />
        <ContentBoxComponent content={children} />
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
