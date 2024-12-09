import Image from "next/image"
import { Input } from "./ui/input"

const Categories = [
    {
        title:'Carfts',
        number:'2'
    },
    {
        title:'Design',
        number:'8'
    },
    {
        title:'Handmade',
        number:'7'
    },
    {
        title:'Interior',
        number:'1'
    },
    {
        title:'Wood',
        number:'6'
    },
]

const PostCategorySection = () => {
  return (
    <div className="flex items-center flex-col w-[100%] justify-center pr-[80px] space-y-10">
      <div className="relative">
      <Input className="w-full" />
      <Image src={'/assets/search.svg'} alt="search" width={19} height={19} className="absolute top-2 left-[11rem] " />
      </div>
      <h2 className="font-medium text-[24px] text-left w-[90%]">Categories</h2>
      {Categories.map((category,index)=>(
        <div className="flex justify-between items-center w-[90%]" key={index}>
        <p className="font-normal text-[16px] text-footerTextColor">{category.title}</p>
        <p className="font-normal text-[16px] text-footerTextColor">{category.number}</p>
      </div>
      ))}
    </div>
  )
}

export default PostCategorySection
