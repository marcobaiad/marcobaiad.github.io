import { Divider } from 'antd'
import { Outlet } from 'react-router-dom'

const Paragraphs = () => {
  return (
    <>
      <Divider />
      <Outlet />
    </>
  )
}

export default Paragraphs
