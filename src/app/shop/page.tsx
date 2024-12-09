
// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';

// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";

// Setting up the Poppins font with different font weights and Latin subset
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
import AnotherHeroSection from "@/components/AnotherHeroSection"
import ProductCard from '@/components/ProductCard';
import DownButton from '@/components/DownButton';
// Array holding the product details. Each object represents one product with details such as:
// url: the image path of the product
// popUp: label to show discounts or special tags (e.g., "New")
// title: name of the product
// description: brief description of the product
// discountPrice: discounted price of the product
// actualPrice: original price of the product (may be empty if no original price exists)
// forceHover: a custom property (optional) to force the hover effect on a specific card
const productArray = [{
  url: '/assets/Syltherine.png',
  popUp: '-30%',
  title: 'Syltherine',
  description: 'Stylish cafe chair',
  discountPrice: 'Rp 2.500.000',
  actualPrice: 'Rp 3.500.000'
},
{
  url: '/assets/leviosa.png',
  popUp: '',
  title: 'Leviosa',
  description: 'Stylish cafe chair',
  discountPrice: 'Rp 2.500.000',
  actualPrice: '',
  forceHover: true // This card will have the hover effect always enabled
},
{
  url: '/assets/Lolito.png',
  popUp: '-50%',
  title: 'Lolito',
  description: 'Luxury big sofa',
  discountPrice: 'Rp 7.000.000',
  actualPrice: 'Rp 14.000.000'
},
{
  url: '/assets/Respira.png',
  popUp: 'New',
  title: 'Respira',
  description: 'Outdoor bar table and stool',
  discountPrice: 'Rp 500.000',
  actualPrice: ''
},
{
  url: '/assets/Grifo.png',
  popUp: '',
  title: 'Grifo',
  description: 'Night lamp',
  discountPrice: 'Rp 1.500.000',
  actualPrice: ''
},
{
  url: '/assets/Muggo.png',
  popUp: 'New',
  title: 'Muggo',
  description: 'Small mug',
  discountPrice: 'Rp 150.000',
  actualPrice: ''
},
{
  url: '/assets/Pingky.png',
  popUp: '-50%',
  title: 'Pingky',
  description: 'Cute bed set',
  discountPrice: 'Rp 7.000.000',
  actualPrice: 'Rp 14.000.000'
},
{
  url: '/assets/Potty.png',
  popUp: 'New',
  title: 'Potty',
  description: 'Minimalist flower pot',
  discountPrice: 'Rp 500.000',
  actualPrice: ''
},
]

const Shop = () => {
  return (
    <div>
      <AnotherHeroSection title="Shop" image='' />
      <div className={`w-full lg:h-[100px] bg-shopSecondBackground py-5 md:px-[70px] px-[10px] flex lg:justify-between md:justify-center gap-5 lg:gap-0 items-start md:items-center ${poppins.className} flex-wrap`}>
        <div className='flex gap-5 items-center'>
        <div className='flex gap-3 items-center'>
            <Image src={'/assets/filter.svg'} alt="filter" height={16.67} width={19.05} />
            <span className="font-normal text-[20px]">Filter</span>
        </div>
        <Image src={'/assets/box.svg'} alt='box' height={16.33} width={16.33} />
        <Image src={'/assets/box1.svg'} alt='box1' height={19.5} width={21} />
        <Image src={'/assets/straightline.svg'} alt='straight line' height={37} width={2} />
        <p className='font-normal md:text-[16px] text-[12px]'>Showing 1–16 of 32 results</p>
        </div>
        <div className='flex md:gap-7 gap-3 items-center justify-center'>
           <div className='w-[126px] h-[55px] flex md:gap-5 gap-3 items-center'>
               <span className='font-normal md:text-[20px] text-[16px]'>Show</span>
               <div className='md:h-[55px] h-[40px] w-[55px] bg-white text-center flex items-center justify-center'>
                <span className='font-normal md:text-[20px] text-[16px] text-footerTextColor'>16</span>
               </div>
           </div>
           <div className='w-[288px] h-[55px] flex md:gap-7 gap-3 items-center'>
               <span className='font-normal md:text-[20px] text-[16px]'>Short By</span>
               <div className='md:h-[55px] h-[40px] md:w-[168px] w-[140px] bg-white text-center flex items-center justify-center'>
                <span className='font-normal md:text-[20px] text-[16px] text-footerTextColor'>Default</span>
               </div>
           </div>
        </div>
      </div>
      <div className='mt-10 flex flex-wrap items-center justify-center gap-7'>
                {
                    // Mapping over the productArray to render a ProductCard for each product.
                    // The ProductCard receives props from the object for rendering individual card details.
                    productArray.map((product, index) => (
                        <ProductCard
                            key={index} // Using index as the key since each product is unique in this case
                            url={product.url} // Product image URL
                            label={product.popUp} // Discount or label badge
                            title={product.title} // Product title
                            description={product.description} // Product description
                            discount={product.discountPrice} // Discounted price
                            actual={product.actualPrice} // Original price
                            forceHover={product.forceHover || false} // Force hover behavior, default to false if undefined
                        />
                    ))
                }
      </div>
      <div className='hidden lg:flex mt-10 flex-wrap items-center justify-center gap-7'>
                {
                    // Mapping over the productArray to render a ProductCard for each product.
                    // The ProductCard receives props from the object for rendering individual card details.
                    productArray.map((product, index) => (
                        <ProductCard
                            key={index} // Using index as the key since each product is unique in this case
                            url={product.url} // Product image URL
                            label={product.popUp} // Discount or label badge
                            title={product.title} // Product title
                            description={product.description} // Product description
                            discount={product.discountPrice} // Discounted price
                            actual={product.actualPrice} // Original price
                            forceHover={product.forceHover || false} // Force hover behavior, default to false if undefined
                        />
                    ))
                }
      </div>
      <DownButton />
      <hr />
    </div>
  )
}

export default Shop
