import food from './image/food.jpg'
export default function About(){
    return (
        <div className="about" id="grid">
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </article>
            <img className='about_img1' src ={food}/>
            <img className='about_img2'src ={food}/>

        </div>
    )
}