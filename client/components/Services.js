import React from 'react'

export default function Services() {
    return (
        <section className='my-services' id='services'>
            <h2 className="section__title section__title--services">What i do</h2>
            <div className="services">

                <div className="service">
                    <h3>E-Commerce</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui sapiente inventore ad ducimus magnam hic libero, fugiat ex non repudiandae dolores possimus voluptatibus. Perferendis est mollitia corrupti inventore explicabo!</p>
                    
                </div>

                <div className="service">
                    <h3>Design + Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, corrupti? Nulla quam magni sit? Doloribus et officia voluptatibus fugit exercitationem a neque, eveniet voluptatem sapiente nisi expedita dolore ipsam quae veniam sequi maxime, vero voluptates.</p>
                </div>

                <div className="service">
                    <h3>React</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam error, omnis et sapiente laborum quo explicabo repudiandae magni aliquam quia fuga facere eligendi ea libero beatae ratione inventore adipisci.</p>
                </div>
            </div>
            <a href="#work" className='btn'>My Work</a>
        </section>
    )
}
