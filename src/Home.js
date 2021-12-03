import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg" alt="" />

            {/* product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={11.96}
                    rating= {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"

                />
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={11.96}
                    rating= {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"

                />
            </div>

            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={11.96}
                    rating= {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"

                />
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={11.96}
                    rating= {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"

                />
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={11.96}
                    rating= {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"

                />
            </div>

            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={11.96}
                    rating= {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                />
               
            </div>
        </div>
    )
}

export default Home
