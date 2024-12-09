import AnotherHeroSection from "@/components/AnotherHeroSection"
import FormSection from "@/components/FormSection"

const CheckOut = () => {
    return (
        <div>
            <AnotherHeroSection title="Checkout" image='/assets/herologo.png' />
            <div className="py-[50px] px-[80px] flex justify-between">
                <FormSection />
            </div>
        </div>
    )
}

export default CheckOut
