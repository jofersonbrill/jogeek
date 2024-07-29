/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * page home joferson le Geek
 * Fondateur de Ponton Geek Community
 * Formateur et Codeur
 */

import { Component } from "react";
//motion
import { motion } from 'framer-motion';
import { fadeIn, Biographie, Biographies, Skill, Skills, AuSkill, AuSkills, Parcour, Parcours } from '../variants';



export default class About extends Component{



    render(){
        
        return (
            <div className="Site1">
                
                <div className="section2_1">

                <motion.h3
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >Biographie</motion.h3>
                    
                    {Biographie.map(biographies => {
                      return (<Biographies biographies = {biographies} />)
                    })}

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
                   
                <div className="section2_2">
                
                </div>
                <div className="section2_3" id="suivant">
                    <motion.h3
                      variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.2 }}


                    >Skils Web</motion.h3>
                   
                    {Skill.map(skills => {
                      return (<Skills skills={skills} />);
                    })}

                    <motion.h3
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    >Auther Skils</motion.h3>
                  
                  {AuSkill.map(auskill =>{
                    return (<AuSkills auskill={auskill}  />)
                  })}
                    
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
                        const element = document.getElementById('suivant1');
                        element?.scrollIntoView({
                          y: 100,
                          behavior: 'smooth',
                          duration: 0.4,
                        });
                      } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                      </motion.p>

                </div>
                <div className="section2_4" id="suivant1">
                    <motion.h3
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    >Parcours professionnel</motion.h3>
                    {Parcour.map(parcours => {
                      return(<Parcours parcours={parcours} />)
                    })}
                </div>

            </div>
        )

    }

}