import AnotherHeroSection from "@/components/AnotherHeroSection"
import DownButton from "@/components/DownButton"
import PostCategorySection from "@/components/PostCategorySection"
import PostSection from "@/components/PostSection"
import RecentPost from "@/components/RecentPost"

const Blog = () => {
    return (
        <div>
            <AnotherHeroSection title="Blog" image='/assets/herologo.png' />
            <div className="md:px-[70px] md:pt-[70px] px-[30px] pt-[30px] flex flex-wrap justify-between">
                <PostSection />
                <div className="flex flex-col md:flex-row lg:flex-col gap-10 mx-auto lg:mx-0">
                    <PostCategorySection />
                    <RecentPost />
                </div>
            </div>
            <div className="flex items-center justify-center">
                    <DownButton />
            </div>
        </div>
    )
}

export default Blog
