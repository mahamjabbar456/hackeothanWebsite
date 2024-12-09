import Image from "next/image"

const RecentPostData = [
    {
        image:'/assets/recentpost1.png',
        title:'Going all-in with millennial design',
        date:'03 Aug 2022'
    },
    {
        image:'/assets/recentpost2.png',
        title:'Exploring new ways of decorating',
        date:'03 Aug 2022'
    },
    {
        image:'/assets/recentpost3.png',
        title:'Handmade pieces that took time to make',
        date:'03 Aug 2022'
    },
    {
        image:'/assets/recentpost4.png',
        title:'Modern home in Milan',
        date:'03 Aug 2022'
    },
    {
        image:'/assets/recentpost5.png',
        title:'Colorful office redesign',
        date:'03 Aug 2022'
    },
]

const RecentPost = () => {
  return (
    <div className="flex items-center flex-col w-[100%] justify-center pr-[80px] space-y-7">
      <h2 className="text-left text-[24px] font-medium">Recent Posts</h2>
      {RecentPostData.map((post,index)=>(
        <div className="flex justify-between gap-5 items-center" key={index}>
        <Image src={post.image} alt={post.title} width={80} height={80} />
        <div className="w-[119px] text-footerTextColor space-y-2">
            <p className="font-normal text-[14px]">{post.title}</p>
            <p className="font-normal text-[12px]">{post.date}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default RecentPost
