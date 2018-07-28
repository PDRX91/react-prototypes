import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component {
    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(url).then(((response)=>{
            console.log('response: ', response);
        }))
    }
    render(){
        return(
            <div>
                <h2>Movie Container</h2>
                <Movie />
            </div>
        )
    }
}

export default MovieContainer;