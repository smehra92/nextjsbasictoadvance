import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div className=' flex'>
        <aside className=' bg-yellow-200 p-5 mr-5 text-black'>Left Sidebar</aside>
        <div>{children}</div>
        <aside className=' bg-yellow-200 p-5 ml-5 text-black'>Right Sidebar</aside>

    </div>
  )
}

export default AdminLayout