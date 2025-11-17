import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

import { homeSection } from './data/HomeSection'
import { CoursesSection } from './data/CoursesSection'
import { TutorsSection, TutorsList} from './data/TutorsSection'
import { PartnersSection, PartnersList } from './data/PartnersSection'
import { contactSection } from './data/ContactSection'

import parser from 'html-react-parser'

import '../styles/Home.css'
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parser(homeSection.content)}
            </div>
        </section>

        {/* online course */}
        <section id="courses">
            <div className="kolom">
                {parser(CoursesSection.content)}
            </div>
            <img src={CoursesSection.image}/>
        </section>

        {/* Tutor */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              {parser(TutorsSection.content)}
            </div>
          </div>
           <Tutors tutorList={TutorsList} />
        </section>

        {/* Partners */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                   {parser(PartnersSection.content)}
                   </div>
                   {<Partners PartnersList={PartnersList} />}
            </div>
        </section>
      </div>
      <Contact contactSection={contactSection}/>
      <Footer />
    </>
  )
}

export default Home
