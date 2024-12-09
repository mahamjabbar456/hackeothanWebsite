import Image from 'next/image';


const RangeProduct = ({url,title}:{url:string,title:string}) => {
  return (
    <div className='text-fontColor'>
      <Image src={url} alt='dining' width={381} height={480} loading="lazy"  className='rounded-lg' />
      <p className={`font-semibold text-[24px] text-center pt-3`}>{title}</p>
    </div>
  )
}

export default RangeProduct
