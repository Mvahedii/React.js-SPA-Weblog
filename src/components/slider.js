import React, {Component} from 'react' 
const imgUrl = 'https://png.pngtree.com/thumb_back/fh260/back_pic/03/73/57/2557bab116b4abb.jpg'

export default class Slider extends Component {

    render(){
        return(
            <div>
                <img width='100%' height='250px' src={imgUrl} alt='Slider' />
            </div>

        );
    }
}