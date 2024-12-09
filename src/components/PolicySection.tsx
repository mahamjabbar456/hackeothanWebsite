// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";

// Data for policy items, each containing an image, title, and description
const policyData = [
    {
        image: '/assets/trophy.png', // Image for high quality policy
        title: 'High Quality',       // Title of the policy
        description: 'crafted from top materials', // Description of the policy
    },
    {
        image: '/assets/gurante.png', // Image for warranty protection policy
        title: 'Warranty Protection',
        description: 'Over 2 years',
    },
    {
        image: '/assets/shipping.png', // Image for free shipping policy
        title: 'Free Shipping',
        description: 'Order over 150 $',
    },
    {
        image: '/assets/support.png', // Image for 24/7 support policy
        title: '24 / 7 Support',
        description: 'Dedicated support',
    },
];

// The PolicySection component displays a list of policy features with icons and descriptions
const PolicySection = () => {
  return (
    <div className='md:h-[270px] p-5 bg-inspirationBackground flex gap-7 flex-wrap items-center lg:justify-center'>
      {/* Mapping through the policyData array to render each policy item */}
      {policyData.map((data, index) => (
        <div key={index} className={`h-[70px] flex gap-3`}>
          {/* Displaying the policy image with Next.js optimized Image component */}
          <Image src={data.image} alt={data.title} width={60} height={60} />
          
          {/* Container for the title and description */}
          <span className='space-y-2'>
            {/* Displaying the policy title with font styling */}
            <p className='font-semibold text-[20px] md:text-[25px]'>{data.title}</p>
            {/* Displaying the policy description with responsive font size */}
            <p className='md:text-[20px] text-[16px] font-medium text-anotherFontColor'>{data.description}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default PolicySection;
