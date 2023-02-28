import './App.css';
import Header from './Header';
import Hero from './Hero';
import Highlight from './Highlight';
import Testimonial from './Testimonial';
import About from './About'
import Footer from './Footer';

function App() {
  return (
    <>
      <head>
        <title>little lemon</title>
        <meta name="description" content="the booking website for little lemon restaurant"/>
        <meta name="og:title" content="little lemon"/>
        <meta name="og:description" content="the booking website for little lemon restaurant"/>
        <meta name="og:image" content="https://i.pinimg.com/564x/93/ee/18/93ee18cd5a5d4b23527529e6a016c8f5.jpg"/>
      </head>
      <main>
        <Header/>
        <Hero/>
        <Highlight/>
        <Testimonial/>
        <About/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
