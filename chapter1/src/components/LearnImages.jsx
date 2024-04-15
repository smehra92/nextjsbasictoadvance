import Image from "next/image"
import MyImage from "../../public/images/nextjs14.jpg"

const LearnImages = () => {
  return (
    <>
    <Image 
    src={MyImage} 
    width={400} />
    </>
  )
}

export default LearnImages