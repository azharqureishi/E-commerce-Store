import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {sliderItems} from '../data'
import { useState } from 'react';
const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left')
       {
           setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : sliderItems.length-1)
           
        }else{
           setSliderIndex(sliderIndex < sliderItems.length -1 ? sliderIndex + 1 : 0)
       }
    }
    
    const styles = {
       
        transform: `translateX(${sliderIndex * -100}vw)`
    }
    return ( <div className="slider">
       <button className="slider__arrow left"  onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon/>
       </button>

        <div className="slider__wrapper" style={styles}>
            
            {sliderItems.map((item) => (

                <div className="slide__container" bg={item.bg} key={item.id}>
            <div className="image__container">
                    <img src={item.img}/>
            </div>
            <div className="info__container">
                <h1 className='title'>{item.title}</h1>
                <p className="desc">{item.desc}</p>
                {/* <button>SHOP NOW</button> */}
            </div>
        </div>
            ))}

        </div>

       <button className="slider__arrow right"  onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon/>
       </button>
    </div> );
}
 
export default Slider;