import Divider from "../../components/Divider";
import HeaderSection from "../../components/HeaderSection";
import FrequentlyAskedQuestions from "../home/partial-section/FrequentlyAskedQuestions";

export default function Faq() {
  return (
    <div>
      <HeaderSection
        title="Frequently Asked Questions"
        imageBackground="images/1066_websize.jpg"
      />
      <Divider />
      <FrequentlyAskedQuestions/>
    </div>
  )
}