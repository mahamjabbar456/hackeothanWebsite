import AnotherHeroSection from "@/components/AnotherHeroSection"
import ContactSection from "@/components/ContactSection"
import PolicySection from "@/components/PolicySection"

const Contact = () => {
  return (
    <div>
      <AnotherHeroSection title="Contact" image='/assets/herologo.png' />
      <ContactSection />
      <PolicySection />
    </div>
  )
}

export default Contact
