import { Component } from "react";

import { fadeIn, Footr, Footer } from '../variants';

import { motion } from 'framer-motion';



export default class Footers extends Component{


    render(){

        return (

            <footer>

            <motion.aside
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >

              {Footer.map(footr => {
                return (
                  <Footr footr={footr} />
                );
              })}

            </motion.aside>

            <p>Copyright 2024  Joferson Legeek tous droit reservé</p>

          </footer>

        )

    }


}