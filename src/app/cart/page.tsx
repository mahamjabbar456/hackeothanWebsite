import AnotherHeroSection from "@/components/AnotherHeroSection"
import CartSection from "@/components/CartSection"
import PolicySection from "@/components/PolicySection"

const Cart = () => {
  return (
    <div>
      <AnotherHeroSection title="Cart" image='/assets/herologo.png' />
      <CartSection />
      <PolicySection />
    </div>
  )
}

export default Cart
