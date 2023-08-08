import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImageWrapper from "@/components/ImageWrapper"
import TechSection from "@/components/TechSection"

const About = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <Header />
      <ImageWrapper />
      <div className="z-10 flex flex-col bg-white/10 w-full h-full text-white font-bold text-3xl overflow-scroll scrollbar scrollbar-none">
        <div className="self-center py-10 flex gap-2">
          <h1>About</h1>
          <span className="text-purple-600">me</span>
        </div>
        <div className="w-[80%] pb-10 self-center font-semibold text-justify text-xl text-gray-200">
          <span>
            As a passionate
          </span>
          <span className="text-purple-600"> full-stack developer</span>
          <span>  with a love for
            technology and science, I discovered my passion for
            programming during my computer science studies and
            decided to pursue it as a career. With over 1 year of
            experience in the IT industry and 6 months as a freelance
            developer, I am dedicated to creating innovative
            solutions and continuously expanding my skills.
            My journey in the world of technology fuels my drive to
            contribute and excel in every project I undertake.
          </span>
        </div>
        <div className="self-center mt-6 flex gap-2">
          <span>Tech</span>
          <span className="text-purple-600">skills</span>
        </div>
        <div className="w-full self-center flex items-center justify-center p-4">
          <TechSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About