import Divider from "../../components/Divider";
import HeaderSection from "../../components/HeaderSection";
import ServiceInformation from "./partial-section/ServiceInformation";

export default function Services() {
  return (
    <div>
      <HeaderSection
        title="Elevate your projects beyond the ordinary."
        imageBackground="images/3f5e60c7f779596c15517a776536c1e3.png"
      />
      <Divider/>
      <ServiceInformation/>
    </div>
  )
}