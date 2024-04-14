import AdminHeader from "@/components/AdminHeader"

const CommonNavigation = ({children}) => {
  return (
    <section>
        <AdminHeader />
        {children}
    </section>
  )
}

export default CommonNavigation