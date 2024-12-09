import Image from "next/image"
import Link from "next/link"

const PostData = [
    {
        image: '/assets/firstpostimage.png',
        adminImage: '/assets/adminicon.svg',
        adminTitle: 'Admin',
        calanderImage: '/assets/calender.svg',
        calenderTitle: '14 Oct 2022',
        tagImage: '/assets/tag.svg',
        tagTitle: 'Wood',
        title: 'Going all-in with millennial design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        image: '/assets/postimagetwo.png',
        adminImage: '/assets/adminicon.svg',
        adminTitle: 'Admin',
        calanderImage: '/assets/calender.svg',
        calenderTitle: '14 Oct 2022',
        tagImage: '/assets/tag.svg',
        tagTitle: 'Handmade',
        title: 'Exploring new ways of decorating',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        image: '/assets/postImagethree.png',
        adminImage: '/assets/adminicon.svg',
        adminTitle: 'Admin',
        calanderImage: '/assets/calender.svg',
        calenderTitle: '14 Oct 2022',
        tagImage: '/assets/tag.svg',
        tagTitle: 'Wood',
        title: 'Handmade pieces that took time to make',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    }
]

const PostSection = () => {
    return (
        <div>
            {PostData.map((post, index) => (
                <div key={index} className="md:h-[794px] lg:w-[820px] space-y-5 mb-[50px] md:mb-[0px] lg:mb-[50px]">
                    <Image src={post.image} alt={post.title} width={817} height={500} />
                    <div className="h-[24px] flex gap-4 md:gap-10">
                        <div className="flex md:gap-2 gap-1 items-center justify-center">
                            <Image src={post.adminImage} alt={post.adminTitle} width={14.48} height={16.15} />
                            <p className="md:text-[16px] text-[14px] font-normal text-footerTextColor">{post.adminTitle}</p>
                        </div>
                        <div className="flex md:gap-2 gap-1 items-center justify-center">
                            <Image src={post.calanderImage} alt={post.calenderTitle} width={16.67} height={16.67} />
                            <p className="md:text-[16px] text-[14px] font-normal text-footerTextColor">{post.calenderTitle}</p>
                        </div>
                        <div className="flex md:gap-2 gap-1 items-center justify-center">
                            <Image src={post.tagImage} alt={post.tagTitle} width={16.67} height={16.67} />
                            <p className="md:text-[16px] text-[14px] font-normal text-footerTextColor">{post.tagTitle}</p>
                        </div>
                    </div>
                    <h2 className="font-medium md:text-[30px] text-[25px]">{post.title}</h2>
                    <p className="font-normal text-[15px] text-footerTextColor pb-5 text-justify">{post.description}</p>
                    <Link href={'#'} className="font-normal text-[16px]">Read More

                        <p className="w-[77px] border-black border-b-[1px] pt-2 pl-4"></p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default PostSection
