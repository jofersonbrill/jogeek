

export const fadeIn = (direction, delay) => {
    return{
        hidden : {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },

        show: {
            y:0,
            x:0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.2,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75],
            }

        }
    }
}


/**
 * Debut Variant de la page Home
 */


export const  Formt = ({formt}) =>{
    return (
        <article className={formt.css1}>
        <div className="haut">
          <i className={formt.icons}></i>
        </div>
        <div className="bas">
            <p>{formt.paragraph}</p>
            <button><a href={formt.lien}>Decouvrir</a></button>
        </div>
    </article>

    )
}

export const Formations = [

    {   
        css1 : 'article1 position1',
        icons : "fa-brands fa-css3-alt",
        paragraph : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel repudiandae possimus explicabo quis rerum incidunt, tenetur sint veniam excepturi a ipsam suscipit similique alias inventore modi eveniet. Eius, doloremque et?',
        lien : '#'
    },
    {
        css1 : 'article1',
        icons : "fa-brands fa-react",
        paragraph : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel repudiandae possimus explicabo quis rerum incidunt, tenetur sint veniam excepturi a ipsam suscipit similique alias inventore modi eveniet. Eius, doloremque et?',
        lien : '#'
    },
    {   
        css1 : 'article1 position3',
        icons : "fa-brands fa-node",
        paragraph : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel repudiandae possimus explicabo quis rerum incidunt, tenetur sint veniam excepturi a ipsam suscipit similique alias inventore modi eveniet. Eius, doloremque et?',
        lien : '#'
    },


];

export const Footr = ({footr}) =>{

    return (
        <div className='Box'>
            <a href={footr.link}>
            <i className={footr.icons}></i>
            <h4>{footr.title}</h4>
            <span>{footr.span}</span>
            </a>
        </div>
    )

}

export const Footer = [
    {   
        link : '#',
        icons : 'fa-brands fa-facebook',
        title : 'Facebook',
        span : 'Ma page Facebook'
    },
    {   
        link : '#',
        icons : 'fa-brands fa-instagram',
        title : 'Instagram',
        span : 'Ma page Intagram'
    },
    {   
        link : '#',
        icons : 'fa-brands fa-discord',
        title : 'Discord',
        span : 'Mon serveur Discord'
    },
    {   
        link : '#',
        icons : 'fa-brands fa-github',
        title : 'Github',
        span : 'Mon serveur Github'
    }
]

/** Fin variant de la page home */

/**
 * Debut variant page About
 */

export const Biographies = ({biographies}) =>{

   return ( <p>{biographies.paragraph}</p>);

}

export const Biographie = [
    {
        paragraph : "Je suis Joferson DIBANDI, un explorateur intrépide des méandres du numérique et formateur passionné, mon parcours dans le monde du developpement m'a non seulement permis de créer des application dynamiques, mais aussi de partager mes connaissances en tant que formateur web"
    },
    {
        paragraph : "Je suis Joferson DIBANDI, un explorateur intrépide des méandres du numérique et formateur passionné, mon parcours dans le monde du developpement m'a non seulement permis de créer des application dynamiques, mais aussi de partager mes connaissances en tant que formateur web"
    }
]

export const Skills = ({skills}) => {

    return (
        <div className="skils"><span><i className={skills.icons}></i>{skills.description}</span></div>
    )

}

export const Skill = [
    {
        icons : 'fa-brands fa-html5',
        description : 'HTML5'
    },
    {
        icons : 'fa-brands fa-css3-alt',
        description : 'CSS3'
    },
    {
        icons : 'fa-brands fa-bootstrap',
        description : 'Bootsrap5'
    },
    {
        icons : 'fa-brands fa-sass',
        description : 'Sass'
    },
    {
        icons : '#',
        description : 'Jquery'
    },
    {
        icons : 'fa-brands fa-js',
        description : 'Javascrip'
    },
    {
        icons : 'fa-brands fa-react',
        description : 'React'
    },
    {
        icons : '#',
        description : 'NextJS'
    },
    {
        icons : 'fa-brands fa-node',
        description : 'NodeJS'
    },
    {
        icons : 'fa-brands fa-grunt',
        description : 'Grunt'
    },
    {
        icons : 'fa-brands fa-gulp',
        description : 'Gulp'
    },
    {
        icons : 'fa-brands fa-github',
        description : 'Git&Github'
    },
    {
        icons : '#',
        description : 'PHP 8'
    },
    {
        icons : '#',
        description : 'MySQL'
    }


];

export const AuSkills = ({auskill}) =>{
    return (
        <div className="skils"><span className={auskill.icons}>{auskill.description}</span></div>
    )
};

export const AuSkill = [
    {
        icons : '#',
        description : 'Photoshop'
    },
    {
        icons : '#',
        description : 'Illustrator'
    },
    {
        icons : '#',
        description : 'XD'
    },
    {
        icons : '#',
        description : 'Switching Routing'
    },
    {
        icons : '#',
        description : 'Virtualisation'
    },
    {
        icons : '#',
        description : 'PenTester'
    },
    {
        icons : '#',
        description : 'Scrum'
    },
];

export const Parcours = ({parcours}) =>{
    return (
        <p> {parcours.date} : {parcours.profil}</p>
    )
}

export const Parcour = [
    {
        date : '2023 à nos jours',
        profil :'Formateur web et Fondateur de Ponton Geek Community'
    },
    {
        date : '2020',
        profil :'Developpeur web Freelance'
    },
    {
        date : '2019',
        profil :'Etudiant à Yekolab'
    },
    {
        date : '2015 à 2018',
        profil :'Etudiant à sueco diplôme obtenu license professionnel en réseau et télécommunication'
    },
    {
        date : '2015',
        profil :'Baccalaureat Technique Serie F2'
    }
]

export const buttonVariants = () =>{

    return{
        hover: {
            scale: [1,1.1,1,1.1,1,1.1,1],
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            textShadow: "0px 0px 8px rgb(255,255,255)",

        }
    }

}

/** Fin variant de la page About */



/**
 * Debut variant page Contact
 */



/** Fin variant de la page Contact */
