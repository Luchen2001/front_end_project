import Hero from './Hero';
import Highlight from './Highlight';
import Testimonial from './Testimonial';
import About from './About'
import Footer from './Footer';
export default function Home(props){
    return (
        <div className = 'home'>
            <Hero reserveTable = {props.reserveTable}/>
            <Highlight/>
            <Testimonial/>
            <About/>
        </div>
    );
}