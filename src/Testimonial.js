import p1 from "./image/p1.png";
import p2 from "./image/p2.png";
import p3 from "./image/p3.png";
import p4 from "./image/p4.png";

export default function Testimonial(){

    const ratings =[
        {name:"person1", img:p1},
        {name:"person2", img:p2},
        {name:"person3", img:p3},
        {name:"person4", img:p4},
    ]

    return(
        <div className='testimonials'>
            <h3>Testimonial</h3>
            <div id="grid">
                {
                    ratings.map(rating=>
                        <div className="rating">
                            <p>Rating</p>
                            <div>
                                <img src={rating.img}/>
                                <p>{rating.name}</p>
                            </div>
                            <p>Review text</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}