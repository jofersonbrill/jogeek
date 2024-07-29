/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
//motion
import { motion} from 'framer-motion';

import Swal from 'sweetalert2'





export default class Contact extends Component{

    render(){

        const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
        
            formData.append("access_key", "d37a08d1-6a3d-4b44-912d-12eb3548cb41");
        
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
        
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json());
        
            if (res.success) {
                Swal.fire({
                    title: "success",
                    text: "Message envoyé avec succès !",
                    icon: "success"
                  });
            }
          };

        return (
            <div className="Contact">
                <article className="aboutCont">
                    <motion.div

                            initial = {{
                                y: -50
                            }}

                            whileInView = {{
                                y:0
                            }}

                            transition={{
                                duration: 3,
                                type: 'spring'
                            }}

                    >
                    <h1>Contactez moi</h1>
                        <span>c'est maintenant
                         ou jamais !</span>
                    </motion.div>
                       
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

                </article>
                    <section id="suivant" className="SecCnt1">
                        <div className="info1">
                            <div>
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="para1">
                                <h3>Adresse :</h3>
                                <p>Arrêt nell, la base aérienne</p>
                            </div>
                        </div>

                        <div className="info1">
                            <div>
                                <i class="fa-solid fa-mobile"></i>
                            </div>
                            <div className="para1">
                                <h3>Téléphone :</h3>
                                <p>06 637 5257</p>
                            </div>
                        </div>

                        <div className="info1">
                            <div>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className="para1">
                                <h3>Email</h3>
                                <p>jofersonbrill@mail.com</p>
                            </div>
                        </div>

                    </section>
                    <section className="SecFrmCnt">
                        <form onSubmit={onSubmit} method="POST" >
                            <input className="nom" type="text" placeholder="Votre nom" name="name" required/>
                            <input className="prenom" type="mail" placeholder="Votre Email" name="mail" required/> <br/>
                            <input className="subject" type="text" placeholder="Sujet" name="subject" required/><br/>
                            <textarea className="commentaire" rows="10" cols="50" placeholder="Commentaire" name="message" required></textarea><br/>
                            <button className="envoyer" type="submit">Envoyer</button>
                        </form>
                    </section>
               
            </div>
        )

    }

}