import Image from "next/image"
import Link from "next/link"

const CartSection = () => {
  return (
    <div className="md:px-[60px] px-[20px] py-[40px] w-full flex flex-wrap justify-between gap-10 items-center lg:items-start">
    <div className="lg:w-[70%] w-full space-y-6">
      {/* Table Header for Medium and Larger Screens */}
      <div className="hidden md:flex h-[55px] bg-shopSecondBackground font-medium text-[16px] items-center justify-around rounded-md">
        <p className="w-[15%] text-center">Product Image</p>
        <p className="w-[15%] text-left">Product</p>
        <p className="w-[15%] text-center">Price</p>
        <p className="w-[15%] text-center">Quantity</p>
        <p className="w-[15%] text-left">Subtotal</p>
        <p className="w-[5%]"></p>
      </div>

      {/* Individual Cart Item */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md p-4 md:p-6 rounded-lg gap-4 md:gap-6">
        
        {/* Product Image */}
        <div className="w-full md:w-[15%] flex justify-center md:justify-start">
          <Image
            src={'/assets/cartimage1.png'}
            alt="Product Image"
            width={108}
            height={105}
            className="w-[80px] h-[80px] md:w-[108px] md:h-[105px] object-contain rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-[17%] text-center md:text-left">
          <p className="font-semibold text-[16px] md:text-[18px] mb-1">Asgaard Sofa</p>
        </div>

        {/* Price */}
        <div className="w-full md:w-[15%] flex justify-center">
          <p className="text-[14px] md:text-[16px] text-gray-500">Rs. 250,000.00</p>
        </div>

        {/* Quantity */}
        <div className="w-full md:w-[15%] flex justify-center">
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-gray-300 rounded-md">
            <p className="text-[14px] md:text-[16px] font-medium">1</p>
          </div>
        </div>

        {/* Subtotal */}
        <div className="w-full md:w-[15%] flex justify-center">
          <p className="text-[14px] md:text-[16px] font-semibold text-primaryColor">Rs. 250,000.00</p>
        </div>

        {/* Delete Button */}
        <div className="w-full md:w-[10%] flex justify-center">
          <button className="p-2 hover:bg-red-100 rounded-md transition">
            <Image
              src={'/assets/delete.svg'}
              alt="Delete Item"
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>
    </div>
      <div className="w-full lg:w-[25%] bg-shopSecondBackground p-5 md:p-6 rounded-lg shadow-md flex flex-col items-center space-y-6">
      {/* Cart Totals Title */}
      <p className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] mb-4">Cart Totals</p>

      {/* Subtotal Row */}
      <div className="w-full flex justify-between items-center gap-4">
        <p className="font-medium text-[14px] md:text-[16px]">Subtotal</p>
        <p className="font-normal text-[14px] md:text-[16px] text-footerTextColor">Rs. 250,000.00</p>
      </div>

      {/* Total Row */}
      <div className="w-full flex justify-between items-center gap-4">
        <p className="font-medium text-[14px] md:text-[16px]">Total</p>
        <p className="font-medium text-[18px] md:text-[20px] text-primaryColor">Rs. 250,000.00</p>
      </div>

      {/* Check Out Button */}
      <Link
        href={'#'}
        className="w-full text-center px-6 py-3 bg-fontColor text-white rounded-md hover:bg-primaryColor transition duration-300"
      >
        Check Out
      </Link>
    </div>
    </div>
  )
}

export default CartSection


