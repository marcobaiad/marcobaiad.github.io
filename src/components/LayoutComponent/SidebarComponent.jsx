import { useState } from 'react'
import { Layout, Menu } from 'antd'
import { routesList } from '../routes'
import { Link, useLocation } from 'react-router-dom'
import { getThree } from './helper/getThree'
import Title from 'antd/lib/typography/Title'
const { Sider } = Layout
const { SubMenu } = Menu

const SidebarComponent = ({ collapsed }) => {
  const { pathname } = useLocation()
  const [selectedMenu, setSelectedMenu] = useState(() => getThree(pathname))

  const getThreeHandler = (path) => setSelectedMenu(getThree(path))

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Title
        level={4}
        ellipsis={true}
        style={{
          paddingInline: '16px',
          color: 'white',
          marginTop: '20px',
          textAlign: 'center',
        }}
      >
        MB Coder
      </Title>
      <Menu
        onClick={(e) => getThreeHandler(e.key)}
        theme="dark"
        mode="vertical"
        selectedKeys={selectedMenu}
        defaultSelectedKeys={['/']}
      >
        {routesList.map((route) => {
          if (route?.childs?.length) {
            return (
              <SubMenu
                key={route.path}
                icon={
                  route.icon?.className ? (
                    <i {...route.icon?.className}></i>
                  ) : (
                    <route.icon style={{ fontSize: '17px' }} />
                  )
                }
                title={
                  <Link to={route.path} style={{ color: 'white' }}>
                    {route.label}
                  </Link>
                }
              >
                {route.childs.map((child) => {
                  if (child.subChilds) {
                    return (
                      <SubMenu key={child.path} title="Parrafos">
                        {child.subChilds.map((subChild) => {
                          return (
                            <Menu.Item
                              title={subChild.label}
                              key={subChild.path}
                            >
                              <Link to={subChild.path}>{subChild.label}</Link>
                            </Menu.Item>
                          )
                        })}
                      </SubMenu>
                    )
                  } else {
                    return (
                      <Menu.Item title={child.label} key={child.path}>
                        <Link to={child.path}>{child.label}</Link>
                      </Menu.Item>
                    )
                  }
                })}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item
                title={route.label}
                key={route.label}
                icon={
                  route.icon?.className ? (
                    <i {...route.icon}></i>
                  ) : (
                    <route.icon style={{ fontSize: '18px' }} />
                  )
                }
              >
                <Link to={route.path}>{route.label}</Link>
              </Menu.Item>
            )
          }
        })}
      </Menu>
    </Sider>
  )
}

export default SidebarComponent
