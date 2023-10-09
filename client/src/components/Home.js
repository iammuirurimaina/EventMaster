import Hero from './Hero';
import HowToUse from './HowtoUse';
import './Home.css'
import ContactForm from './ContactForm';

function Home ({user}){
    return(
        <div >
        <Hero />
        <HowToUse />
        <ContactForm />

        

        </div>

    )
}
export default Home