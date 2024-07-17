import React,{useRef} from 'react'
import "./websites.scss";
import {motion,useInView} from "framer-motion";

import Website1 from "../../assets/knowyourcountry.png"
import Website2 from "../../assets/portfolio2.png"
import Website3 from "../../assets/portfolio3.png"
import Website4 from "../../assets/portfolio4.png"


const websitesData = [
  {
    id:1,
    image:Website1,
    title:'Know Your Country',

    live:'https://knowurcountry.netlify.app/'
  },

{
  id:2,
  image:Website2,
  title:'Netflix Clone',

  github:"https://github.com/hsharma700/netflix-clone-2024",
  live:'https://net-clone1.netlify.app'
},
{
  id:3,
  image:Website3,
  title:'Logihunt',

  github:"https://github.com/hsharma700/website1",
  live:'https://logi2024.netlify.app'
},
{
  id:4,
  image:Website4,
  title:'Sample Website 2',

  github:"https://github.com/hsharma700/cloudNow",
  live:'https://hsharma700.github.io/cloudNow/'
},
]


function Websites() {

  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})

  return (
    <section id='websites' ref={ref}>
      <motion.h5
      animate={{opacity:isInView?1:0}}
      transition={{duration:isInView?1:0}}
      >Projects</motion.h5>
      <motion.h2
        animate={{opacity:isInView?1:0}}
      transition={{duration:isInView?1:0}}
      >Websites</motion.h2>
      <div className="container portfolio_container">
       {websitesData.map((item,index)=>
        <motion.article className="portfolio_item"
        animate={{opacity:isInView?1:0}}
        transition={{duration:isInView?1:0,delay:isInView?index:0}}
        >
        <div className="portfolio_item-image">
          <img src={item.image} alt="" />
        </div>
          <h3>{item.title}</h3>
          <div className='portfolio_item-cta'>
          <a href={item.github} className='btn' rel="noreferrer" target="_blank">Github</a>
          <a href={item.live} className='btn btn-primary' rel="noreferrer" target="_blank">Live View</a>
          </div>
      </motion.article>
       )}
        

      </div>
    </section>
  )
}

export default Websites
