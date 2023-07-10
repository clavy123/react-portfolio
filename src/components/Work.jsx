import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../data/data.json";

const Work = () => {
  return (
    <div id='work'>
      <h2>Work</h2>
      <section>
        <article>
          <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          autoPlay={true}
          >
          {data.projects.map((item)=>(
            <div key={item.id} className='workItem'>
              <img src={item.imgSrc} alt={item.title} />
              <aside>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a target={"blank"} href={"item.url"}>
                  Demo
                </a>
              </aside>
            </div>
          ))}
          </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Work
