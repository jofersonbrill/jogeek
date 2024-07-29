
/**
 * page home joferson le Geek
 * Fondateur de Ponton Geek Community
 * Formateur et Codeur
 * 2023-2024
 */

/* eslint-disable no-self-compare */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import Slider from "react-slick";
import CongoD from './images/CongoD.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

//NavLink
import { NavLink } from 'react-router-dom';

//motion
import { motion } from 'framer-motion';

//variants
import { fadeIn, Formt, Formations, buttonVariants} from '../variants';


export default class Home extends Component{

  
    
     //Le constructeur pour l'état local du site
     
    constructor(){
        super()
        this.state = {
            title1 : 'Joferson Dibandi',
            title2 : 'Je suis un Geek',
            parahome1 : 'Bienvenue sur la plate-forme qui explore le',
            parahome2 : "monde fascinant d'un vrai geek !",
            pararoadmap1 : " vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui :",
            pararoadmap2 : " Nos cours personnalisés vous guide pas à pas vers la maitrise du code, ",
            pararoadmap3 : " et transformer votre passion en carrière",
            S3para1 : 'Rejoignez une communauté',
            S3para2 : 'passionnée et solidaire',
            S4para1 : " vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui :",
            S4para2 : " Nos cours personnalisés vous guide pas à pas vers la maitrise du code, ",
            S4para3 : " et transformer votre passion en carrière",


        }
    }

    //Le render de la page Home

    render(){

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true
          };

        return(


          //Début Section About

        <><section className='Section1'>

              <article>

              <div className="absolute inset-0 justify-center">
                <div className="bg-shap1 bg-teal opacity-50 bg-blur"></div>
                  <div className="bg-shap2 bg-primary opacity-50 bg-blur"></div>
                  <div className="bg-shap1 bg-purple opacity-50 bg-blur"></div>
              </div>

                <motion.h1
                  initial={{
                    opacity: 0
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: [0.1, 1.1, 0.9, 1.03, 0.97, 1]
                  }}
                  transition={{
                    duration: 0.9,
                    type: 'tween',
                    delay: 0.3,
                    ease: [0.25, 0.25, 0.25, 0.75]
                  }}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  {this.state.title1}<br />
                  {this.state.title2}
                </motion.h1>



                <div className='paragraph-home1'>

                  <motion.p
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {this.state.parahome1} <br /> {this.state.parahome2}
                  </motion.p>


                  <motion.button

                  variants={buttonVariants()}
                  whileHover="hover"

                  ><NavLink to="/about">A propos de moi</NavLink>
                  
                  </motion.button>

                  <motion.p

                    animate={{
                      opacity: [0.8, 0.4, 0.5, 0.8, 0.9],
                      y: [10, 0, 10]
                    }}

                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      time: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1
                    }}

                    className='arrow-bottom'
                  >

                    <a onClick={() => {
                      const element = document.getElementById('suivant');
                      element?.scrollIntoView({
                        y: 100,
                        behavior: 'smooth',
                        duration: 0.4,
                      });
                    } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                  </motion.p>

                </div>
              </article>
            </section>
        
          
            
            <section className='Section2' id="suivant">

              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className='accroche1'>
                <h1> <i className="fa-solid fa-signs-post"></i>ROADMAP DU DEVELOPPEUR</h1>
                <p>
                  {this.state.pararoadmap1} 
                  {this.state.pararoadmap2}
                  {this.state.pararoadmap3}
                </p>

                
              </motion.div>

              <motion.article
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}

                className='formations'>

                {Formations.map(formt => {
                  return (<Formt formt={formt} />);
                })}

              </motion.article>


            </section>
            
            
            <section className='Section3' id="S1">

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
              >
                {this.state.S3para1} <br /> {this.state.S3para2} <br />

                <button>Decouvrir</button>
              </motion.p>

            </section><section className='Section4'>

              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className='Communaute-para'>
                <p>
                  {this.state.S4para1} <br />
                  {this.state.S4para2} <br />
                  {this.state.S4para3}
                </p>
              </motion.div>


              <motion.aside
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="slider-container">
                <Slider {...settings}>
                  <div><img src={CongoD} alt='' /></div>
                  <div><img src={CongoD} alt='' /></div>
                  <div><img src={CongoD} alt='' /></div>
                  <div><img src={CongoD} alt='' /></div>
                </Slider>
              </motion.aside>

            </section>
  
            </>
          

        );
    }
}