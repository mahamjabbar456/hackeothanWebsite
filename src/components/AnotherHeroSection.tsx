
// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";

// AnotherHeroSection component, which accepts a `title` prop
const AnotherHeroSection = ({ title ,image }: { title: string, image:string }) => {
  return (
    // Main container with full width, fixed height, and centered content
    <div className={`w-full h-[316px] relative flex flex-col items-center justify-center`}>

      {/* Background image filling the entire container with an object-cover property */}
      <Image src={'/assets/backgroundimage1.png'} alt="backgroundimage" fill className="object-cover" />

      {image && (
        <Image src={image} alt={title} width={60} height={60} className='mb-0' />
      )}

      {/* Title text displayed over the background image */}
      <p className="text-[48px] font-medium text-black">{title}</p>

      {/* Navigation breadcrumbs: "Home > title" */}
      <div className='flex gap-2'>
        <p className='font-medium text-[16px]'>Home</p>
        
        {/* Arrow icon separating "Home" and the current title */}
        <Image src={'/assets/greaterarrow.svg'} alt='left arrow' width={8} height={8} />
        
        {/* Displaying the current section title */}
        <p className='font-light text-[16px]'>{title}</p>
      </div>
    </div>
  )
}

export default AnotherHeroSection;
