import Divider from "../../components/Divider";
import HeaderSection from "../../components/HeaderSection";
import PricingInformation from "./partial-section/PricingInformation";

export default function Pricing() {
  return (
    <div>
      <HeaderSection
        title="Pricing"
        imageBackground="images/1066_websize.jpg"
      />
      <Divider/>
      <PricingInformation/>
    </div>
  )
}