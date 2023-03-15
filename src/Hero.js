import img from './image/hero.jpg'
export default function Hero(){
    return(
        <div className = "hero" id='grid'>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Reserve a Table</button>
            </div>
            <img src= {img}/>
        </div>
    )
}