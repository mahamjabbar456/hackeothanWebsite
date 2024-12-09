
const DownButton = () => {
  return (
      <div className={`flex items-center justify-center py-[20px] gap-5`}>
      <div className="w-[60px] h-[60px] bg-primaryColor text-white rounded-md flex items-center justify-center font-normal text-[20px]">
        1
      </div>
      <div className="w-[60px] h-[60px] bg-shopSecondBackground rounded-md flex items-center justify-center font-normal text-[20px]">
        2
      </div>
      <div className="w-[60px] h-[60px] bg-shopSecondBackground rounded-md flex items-center justify-center font-normal text-[20px]">
        3
      </div>
      <div className="w-[60px] h-[60px] bg-shopSecondBackground rounded-md flex items-center justify-center font-normal text-[20px] px-[40px]">
        Next
      </div>
    </div>
  )
}

export default DownButton
