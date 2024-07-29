import { Component } from "react";

import { motion} from 'framer-motion';


export default class Blog extends Component{


    render (){

        return (
            <div className="Blog">
                
               <section className="S1blog">
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

                    >PAGE EN <br/>  CONSTRUCTION</motion.h1>
                    <p>
                    vous rêver de devenir developpeur web ? Débuter votre voyage dans le developpement web aujourd'hui 
                    Nos cours personnalisés vous guide pas à pas vers la maitrise du code,
                    et transformer votre passion en carrière
                    </p>
               </section>

             </div>
        )

    }

}