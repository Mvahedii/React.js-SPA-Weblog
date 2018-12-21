import React, {Component} from 'react' 
import './slider.css'

const imgUrl = 'http://uupload.ir/files/f1ym_image-upload.png'

export default class Slider extends Component {

    render(){
        return(
            <div>
                <img src={imgUrl} alt='Slider' />
            </div>

        );
    }
}