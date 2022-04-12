import { Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import LayoutComponent from './components/LayoutComponent'
import HomePage from './Pages/HomePage'
import { routesList } from './components/routes'

const App = () => {
  return (
    <LayoutComponent>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        {routesList.map((route, indexRoute) => {
          if (route?.childs?.length) {
            return (
              <Route
                key={`sub-${indexRoute}`}
                path={route.path}
                element={<route.pageComponent />}
              >
                {route.childs.map((child, index) => {
                  if (child?.subChilds?.length) {
                    return (
                      <Route
                        key={`sub-${indexRoute}-${index}`}
                        path={child.path}
                        element={<child.pageComponent />}
                      >
                        {child.subChilds?.map((subChild, subIndex) => {
                          return (
                            <Route
                              index={subIndex === 0}
                              key={`sub-${indexRoute}-${index}-${subIndex}`}
                              path={subChild.path}
                              element={<subChild.pageComponent />}
                            />
                          )
                        })}
                      </Route>
                    )
                  } else {
                    return (
                      <Route
                        key={`sub-${indexRoute}-${index}`}
                        path={child.path}
                        element={<child.pageComponent />}
                      />
                    )
                  }
                })}
              </Route>
            )
          } else {
            return (
              <Route
                key={`sub-${indexRoute}`}
                path={route.path}
                element={<route.pageComponent />}
              />
            )
          }
        })}
      </Routes>
    </LayoutComponent>
  )
}

export default App
