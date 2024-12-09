// Button component definition
const Button = () => {
    return (
        <div className={`flex items-center justify-center pt-10`}>
            {/* Button Container with Styling */}
            <div className='flex items-center justify-center w-[245px] h-[48px] border-2 border-primaryColor font-semibold text-[16px] text-primaryColor'>
                Show More  {/* Button Text */}
            </div>
        </div>
    )
}

export default Button;
