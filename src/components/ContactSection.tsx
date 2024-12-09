// Importing the Image component from Next.js for optimized image handling
import Image from "next/image";

// Importing custom Input component and ColorFulButton for the form
import { Input } from "./ui/input";
import ColorFulButton from "./ColorFulButton";

// Data object holding information to display in the contact section
const infoData = [
    {
        image: '/assets/address.svg', // Path to the address icon image
        title: "Address", // Title to display for the first piece of information
        description: "236 5th SE Avenue, New York NY10000, United States", // Address description
        description1: "" // Empty second description (used in case of additional info)
    },
    {
        image: '/assets/phone.svg', // Path to the phone icon image
        title: "Phone", // Title for the phone contact section
        description: "Mobile: +(84) 546-6789", // Primary phone number
        description1: 'Hotline: +(84) 456-6789' // Secondary hotline number
    },
    {
        image: '/assets/time.svg', // Path to the working time icon image
        title: "Working Time", // Title for working hours section
        description: "Monday-Friday: 9:00 - 22:00", // Primary working hours
        description1: 'Saturday-Sunday: 9:00 - 21:00' // Secondary working hours for weekends
    }
]

const ContactSection = () => {
  return (
    <div className={`pt-[40px] lg:px-[70px] md:px-[40px] px-[20px]`}>
      {/* Heading for the contact section */}
      <p className="text-center font-semibold text-[36px]">Get In Touch With Us</p>

      {/* Subheading explaining the purpose of the contact form */}
      <p className="text-center font-normal md:w-[55%] text-[16px] mx-auto text-footerTextColor">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
        Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      {/* Wrapper for information and contact form */}
      <div className="lg:px-[40px] pt-[50px] pb-[30px] w-full flex lg:justify-center md:gap-5 lg:gap-0 md:justify-between flex-col md:flex-row">
        
        {/* Left section displaying contact information */}
        <div className="lg:w-[30%] md:w-[50%]">
          {/* Mapping through the infoData array to display each piece of contact info */}
          {infoData.map((info) => (
            <div className="flex items-start gap-10 mb-10" key={info.title}>
              {/* Image displaying the icon for the contact type */}
              <Image src={info.image} alt={info.title} width={22} height={27.59} className="pt-[-60px]" />
              <div>
                {/* Displaying the title of the contact info */}
                <p className="font-medium text-[24px]">{info.title}</p>
                {/* Displaying the main description */}
                <p className="font-normal text-[16px]">{info.description}</p>
                {/* Conditionally rendering the second description if available */}
                {info.description1 && (
                  <p className="font-normal text-[16px]">{info.description1}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right section with the contact form */}
        <div className="lg:w-[40%] md:w-[50%]">
          {/* Input field for user's name */}
          <label className="text-sm">Your name</label>
          <Input placeholder="ABC" className="mt-3 mb-5 px-7 py-9" />

          {/* Input field for user's email address */}
          <label className="text-sm">Email address</label>
          <Input placeholder="abc@gmail.com" className="mt-3 mb-5 px-7 py-9" />

          {/* Input field for the subject of the inquiry */}
          <label className="text-sm">Subject</label>
          <Input placeholder="This is an optional" className="mt-3 mb-5 px-7 py-9" />

          {/* Textarea for the user to type their message */}
          <label className="text-sm">Message</label>
          <textarea
            cols={49} 
            className="w-full text-footerTextColor px-7 py-9 border border-footerTextColor mt-3 mb-5 rounded-md"
            placeholder="Hi i would like to ask about"
          ></textarea>

          {/* Submit button to submit the contact form */}
          <ColorFulButton title="Submit" />
        </div>
      </div>
    </div>
  );
}

// Exporting the ContactSection component for use in other parts of the application
export default ContactSection;
