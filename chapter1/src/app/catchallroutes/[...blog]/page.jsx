const Blog = ({params}) => {
  console.log(params)
  return (
    <div>Blog {params.blog}</div>
  )
}

export default Blog

//http://localhost:3000/catchallroutes/xyz/abc/1