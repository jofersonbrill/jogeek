/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
//motion
import { motion} from 'framer-motion';


//NavLink
import { NavLink } from 'react-router-dom';

import {buttonVariants} from '../variants';


export default class Roadmap extends Component{

    render(){

        return (
            <div className="Roadmap">

                <div className="Rabout">

                    <motion.h1

                        initial = {{
                            y: -50
                        }}

                        whileInView = {{
                            y:0
                        }}

                        transition={{
                            duration: 2,
                            type: 'spring'
                        }}


                    >
                        Roadmap <br/> Du Developpeur
                    </motion.h1>
                    <p>
                    vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                    Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                    et transformer votre passion en carrière
                    </p>

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


                <div id="suivant" className="Rdescript">

                    <div className="SectionR">
                        <motion.div

                        className="resume"

                        initial = {{
                            x: -500,
                            Y:-300

                        }}

                        whileInView = {{
                            rotateZ: 360,
                            x:0,
                            y:0
                        }}

                        transition={{
                            duration: 0.5,
                            type: 'spring'
                        }}

                        > 
                            <h3><span className="tag">1</span>HTML5</h3>
                            vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                            Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                            et transformer votre passion en carrière.
                            
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

                                className='arrow-bottom button-cntr'
                                >

                                <a onClick={() => {
                                const element = document.getElementById('FCSS');
                                element?.scrollIntoView({
                                    y: 100,
                                    behavior: 'smooth',
                                    duration: 0.4,
                                });
                                } }><i class="fa-solid fa-circle-chevron-down htmlClr"></i></a>

                 </motion.p>


                        </motion.div>

                        <div className="iconfa">
                           <motion.i 

                                initial = {{
                                    x: 500,
                                    Y: 300
                                }}

                                whileInView = {{
                                    rotateZ: -360,
                                    x:0,
                                    y:0
                                }}

                                transition={{
                                    duration: 0.5,
                                    type: 'spring'
                                }}
                           
                           className="fa-brands fa-html5 html"></motion.i>
                        </div>
                    </div>

                    <div id="FCSS" className="SectionR">

                        <div className="iconfa">
                             <motion.i

                                    initial = {{
                                        x: -500,
                                        Y:-300

                                    }}

                                    whileInView = {{
                                        rotateZ: 360,
                                        x:0,
                                        y:0
                                    }}

                                    transition={{
                                        duration: 0.5,
                                        type: 'spring'
                                    }}
                             
                             className="fa-brands fa-css3-alt css"></motion.i>
                        </div>

                    <motion.div

                    className="resume"

                            initial = {{
                                x: 500,
                                Y:300

                            }}

                            whileInView = {{
                                rotateZ: -360,
                                x:0,
                                y:0
                            }}

                            transition={{
                                duration: 0.5,
                                type: 'spring'
                            }}


                    > 
                        <h3><span className="tag tag1 ">2</span>CSS3</h3>
                            vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                        Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                        et transformer votre passion en carrière

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
                                const element = document.getElementById('FBOOTSTRAP');
                                element?.scrollIntoView({
                                    y: 100,
                                    behavior: 'smooth',
                                    duration: 0.4,
                                });
                                } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                 </motion.p>
                        
                    </motion.div>



                    </div>


                    <div id="FBOOTSTRAP" className="SectionR">

                        <motion.div

                        className="resume"

                            initial = {{
                                x: -500,
                                Y:-300

                            }}

                            whileInView = {{
                                rotateZ: 360,
                                x:0,
                                y:0
                            }}

                            transition={{
                                duration: 0.5,
                                type: 'spring'
                            }}

                        > 
                         <h3><span className="tag tag2">3</span>Bootstrap</h3>
                            vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                            Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                            et transformer votre passion en carrière
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

                                className='arrow-bottom button-cntr'
                                >

                                <a onClick={() => {
                                const element = document.getElementById('FGITHUB');
                                element?.scrollIntoView({
                                    y: 100,
                                    behavior: 'smooth',
                                    duration: 0.4,
                                });
                                } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                 </motion.p>
                        </motion.div>
                        <div className="iconfa">
                             <motion.i

                                    initial = {{
                                        x: 500,
                                        Y: 300

                                    }}

                                    whileInView = {{
                                        rotateZ: -360,
                                        x:0,
                                        y:0
                                    }}

                                    transition={{
                                        duration: 0.5,
                                        type: 'spring'
                                    }}
                             
                             className="fa-brands fa-bootstrap bootstrap"></motion.i>
                        </div>

                    </div>
                    <div id="FGITHUB" className="SectionR">
                        <div className="iconfa">
                            <motion.i
                                initial = {{
                                    x: -500,
                                    Y:-300
        
                                }}
        
                                whileInView = {{
                                    rotateZ: 360,
                                    x:0,
                                    y:0
                                }}
        
                                transition={{
                                    duration: 0.5,
                                    type: 'spring'
                                }}


                             class="fa-brands fa-github"></motion.i>
                        </div>
                        <motion.div

                        className="resume"

                            initial = {{
                                x: 500,
                                Y:300

                            }}

                            whileInView = {{
                                rotateZ: -360,
                                x:0,
                                y:0
                            }}

                            transition={{
                                duration: 0.5,
                                type: 'spring'
                            }}
                        
                        >
                        <h3><span className="tag tag3">4</span>Git & Github</h3>
                             vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                    Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                    et transformer votre passion en carrière
                    
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
                                const element = document.getElementById('FSASS');
                                element?.scrollIntoView({
                                    y: 100,
                                    behavior: 'smooth',
                                    duration: 0.4,
                                });
                                } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                 </motion.p>

                    </motion.div>
                    </div>
                    <div id="FSASS" className="SectionR">
                        <motion.div

                            className="resume"

                            initial = {{
                                x: -500,
                                Y:-300
    
                            }}
    
                            whileInView = {{
                                rotateZ: 360,
                                x:0,
                                y:0
                            }}
    
                            transition={{
                                duration: 0.5,
                                type: 'spring'
                            }}
                        > 
                        <h3><span className="tag tag4">5</span>Sass</h3>
                            vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                    Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                    et transformer votre passion en carrière
                        
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

                            className='arrow-bottom button-cntr'
                            >

                            <a onClick={() => {
                            const element = document.getElementById('FJS');
                            element?.scrollIntoView({
                                y: 100,
                                behavior: 'smooth',
                                duration: 0.4,
                            });
                            } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                            </motion.p>

                    </motion.div>
                        <div className="iconfa">
                             <motion.i
                                initial = {{
                                    x: 500,
                                    Y:300
        
                                }}
        
                                whileInView = {{
                                    rotateZ: -360,
                                    x:0,
                                    y:0
                                }}
        
                                transition={{
                                    duration: 0.5,
                                    type: 'spring'
                                }}
                              className="fa-brands fa-sass sass"></motion.i>
                        </div>
                    </div>


                    <div id="FJS" className="SectionR">
                        <div className="iconfa">
                             <motion.i
                                initial = {{
                                    x: -500,
                                    Y:-300
        
                                }}
        
                                whileInView = {{
                                    rotateZ: 360,
                                    x:0,
                                    y:0
                                }}
        
                                transition={{
                                    duration: 0.5,
                                    type: 'spring'
                                }}
                             className="fa-brands fa-js js"></motion.i>
                        </div>
                        <motion.div

                            className="resume"

                            initial = {{
                                x: 500,
                                Y:300
    
                            }}
    
                            whileInView = {{
                                rotateZ: -360,
                                x:0,
                                y:0
                            }}
    
                            transition={{
                                duration: 0.5,
                                type: 'spring'
                            }}
                        > 
                        <h3><span className="tag tag5">6</span>Javascript</h3>
                            vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                    Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                    et transformer votre passion en carrière
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
                        const element = document.getElementById('FREACT');
                        element?.scrollIntoView({
                            y: 100,
                            behavior: 'smooth',
                            duration: 0.4,
                        });
                        } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                        </motion.p>
                    </motion.div>
                    </div>
                    <div id="FREACT" className="SectionR">
                        <motion.div
                        className="resume"
                            initial = {{
                                x: -500,
                                Y:-300
    
                            }}
    
                            whileInView = {{
                                rotateZ: 360,
                                x:0,
                                y:0
                            }}
    
                            transition={{
                                duration: 0.5,
                                type: 'spring'
                            }}
                        >
                        <h3><span className="tag tag6">7</span>React</h3>
                             vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                    Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                    et transformer votre passion en carrière
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

                        className='arrow-bottom button-cntr'
                        >

                        <a onClick={() => {
                        const element = document.getElementById('FBACKEND');
                        element?.scrollIntoView({
                            y: 100,
                            behavior: 'smooth',
                            duration: 0.4,
                        });
                        } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                        </motion.p>
                    </motion.div>
                        <div className="iconfa">
                             <motion.i

                                    initial = {{
                                        x: 500,
                                        Y:300

                                    }}

                                    whileInView = {{
                                        rotateZ: -360,
                                        x:0,
                                        y:0
                                    }}

                                    transition={{
                                        duration: 0.5,
                                        type: 'spring'
                                    }}

                              className="fa-brands fa-react react"></motion.i>
                        </div>
                    </div>
                    <div id="FBACKEND" className="SectionBack">
                            <motion.h3

                                initial = {{
                                    y: -50
                                }}

                                whileInView = {{
                                    y:0
                                }}

                                transition={{
                                    duration: 2,
                                    type: 'spring'
                                }}

                            >Developpement <br/>web Backend</motion.h3>
                            <p> 
                                vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                            Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                            et transformer votre passion en carrière
                        </p>

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
                        const element = document.getElementById('FNODEJS');
                        element?.scrollIntoView({
                            y: 100,
                            behavior: 'smooth',
                            duration: 0.4,
                        });
                        } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                        </motion.p>
                    </div>
                    <div id="FNODEJS" className="SectionR">
                        <motion.div
                        className="resume"
                            initial = {{
                                x: -500,
                                Y:-300
    
                            }}
    
                            whileInView = {{
                                rotateZ: 360,
                                x:0,
                                y:0
                            }}
    
                            transition={{
                                duration: 0.5,
                                type: 'spring'
                            }}
                        > 

                        <h3><span className="tag tag7">#</span>NODE JS</h3>
                            
                            vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                    Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                    et transformer votre passion en carrière
                        
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

                        className='arrow-bottom button-cntr'
                        >

                        <a onClick={() => {
                        const element = document.getElementById('FPHP');
                        element?.scrollIntoView({
                            y: 100,
                            behavior: 'smooth',
                            duration: 0.4,
                        });
                        } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                        </motion.p>

                    </motion.div>
                        <div className="iconfa">
                            <motion.i
                                initial = {{
                                    x: 500,
                                    Y:300
        
                                }}
        
                                whileInView = {{
                                    rotateZ: -360,
                                    x:0,
                                    y:0
                                }}
        
                                transition={{
                                    duration: 0.5,
                                    type: 'spring'
                                }}
                            className="fa-brands fa-node node"></motion.i>
                        </div>
                    </div>
                    <div id="FPHP" className="SectionR">
                        <div className="iconfa">
                            <motion.i
                                initial = {{
                                    x: -500,
                                    Y:-300
        
                                }}
        
                                whileInView = {{
                                    rotateZ: 360,
                                    x:0,
                                    y:0
                                }}
        
                                transition={{
                                    duration: 0.5,
                                    type: 'spring'
                                }}
                            className="fa-brands fa-php php"></motion.i>
                        </div>

                        <motion.div
                        className="resume"
                            initial = {{
                                x: 500,
                                Y:300
    
                            }}
    
                            whileInView = {{
                                rotateZ: -360,
                                x:0,
                                y:0
                            }}
    
                            transition={{
                                duration: 0.5,
                                type: 'spring'
                            }}
                        >
                        <h3><span className="tag tag8">#</span>PHP & MySQL</h3>
                             vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                    Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                    et transformer votre passion en carrière
                    
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
                        const element = document.getElementById('FNOW');
                        element?.scrollIntoView({
                            y: 100,
                            behavior: 'smooth',
                            duration: 0.4,
                        });
                        } }><i class="fa-solid fa-circle-chevron-down"></i></a>

                        </motion.p>

                    
                    </motion.div>
                    
                    

                    </div>
                </div>
                <div id="FNOW" className="Rmodule">
                    <motion.h3

                        initial = {{
                            x: -500
                        }}

                        whileInView = {{
                            x:0,
                        }}

                        transition={{
                            duration: 0.5,
                            type: 'spring'
                        }}

                    >Pret pour l'aventure <br/> Geek ?</motion.h3>

                    <p>Si vous partagez la passion de donner vie à des idées exceptionnelles, 

                    je serai ravi de discuter de colaboration futurs ou de possibilité de soutiens à des projets innovants.<br/><br/>
                    
                   Donner vie à votre immagination maintenant ! en cliquons sur  ce lien contactez moi</p>

                    <motion.button className="btn-contact"

                  variants={buttonVariants()}
                  whileHover="hover"

                  ><NavLink to="/">Contactez moi</NavLink>
                  
                  </motion.button>
                </div>
            </div>
        )
    }

}