import bruchetta from './image/bruchetta.svg';
import salad from './image/salad.jpg';
import dessert from './image/dessert.jpg'

export default function Highlight(){
    const dish =[
        {name:"Greek salad", price:"$12.99", img:bruchetta, description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "},
        {name:"Bruchetta", price:"$5.99", img:salad, description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "},
        {name:"Lemon Dessert", price:"$5.00", img:dessert, description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
    ]
    return (
        <div className="highlight">
            <div className='highlight_title'>
                <h2>Special</h2>
                <button>Online Menu</button>
            </div>
            <div className="special" id = "grid">
                {
                    dish.map(dish=>
                        <div className='dish'>
                            <img src={dish.img}/>
                            <div className='dish_text'>
                                <div className='dish_name'>
                                    <p>{dish.name}</p>
                                    <p>{dish.price}</p>
                                </div>
                                <p className='dish_des'>{dish.description}</p>
                                <p className='dish_order'>Order a delivery</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}