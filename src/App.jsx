import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Guide from "./Components/Guide"
import Sellers from "./Components/Sellers"
import Review1 from "./Components/Review1"
import Review2 from "./Components/Review2"
import Colors from "./Components/Colors"
import Interviews from "./Components/Interviews"
import Person from "./Components/Person"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Guide />
      <Sellers />
      <Review1 imageSrc="/image 3.png" title="People and Society" description={<>Our guides to society deliver all <br /> the social insight you need, <br /> helping you understand how <br /> people live, love and play today <br /> and why communities are the <br /> way they are.</>} linkText="Shop Society Guides"/>
      <Review2 />
      <Review1 imageSrc="/rev3 person.png" title="Power and Politics" description={<>Our guides to power take you <br /> behind the scenes to explore the <br /> power dynamics, policies and <br /> politics shaping a country's <br /> future and its global position.</>} linkText="Coming 2022!"/>
      <Colors />
      <Interviews />
      <div className="bg-[#F0F0F0] py-[50px] flex justify-evenly flex-wrap">
        <Person imageSrc = "/Rectangle.png" description = "I don’t like things to be conventional. If it’s too nice, I bring disorder." name = "Camille Muller," title = "Landscape Designer, France"/>
        <Person imageSrc = "/Rectangle (1).png" description = "Magic is not magic in the sense that I can just wish for anything." name = "Sonia Kowalewski," title = "Witch, Germany"/>
        <Person imageSrc = "/Rectangle (2).png" description = "I don’t like things to be conventional. If it’s too nice, I bring disorder." name = "Camille Muller," title = "Skateboarder, Germany"/>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default App