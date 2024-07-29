import { Component, useEffect, useState} from 'react';


const Scrollbar = () => {

    const [backToTopBottom, setToTopBottom] = useState(false);

        useEffect(()=>{
            window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setToTopBottom(true)
            }else{
                setToTopBottom(false)
            }
            })
        }, [])

        const scrollUp = () => {
            window.scrollTo({
            top:0,
            behavior: "smooth"
            })
        }

        return (
            <div>
            {backToTopBottom && (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <p className='scroll-top'><a onClick={scrollUp} ><i class="fa-solid fa-circle-chevron-up"></i></a></p>
            )}
          </div>
        )

}

export default class ScrollY extends Component{

    render(){
        return (
            <Scrollbar/>
        )
    }

}