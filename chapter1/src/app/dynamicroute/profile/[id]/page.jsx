const MyProfile = ({params}) => {
    // console.log(params)
  return (
    <div>MyProfile : 
    {params.id}
    </div>
  )
}

export default MyProfile


//http://localhost:3000/dynamicroute/profile/5