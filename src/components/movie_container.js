import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }
    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        axios.get(url).then(((response)=>{
            this.setState({
                movies: response.data.feed.entry
            })
        }))
    }
    render(){
        const movieList = this.state.movies.map((item, index) => {
            return(
                <Movie key={index} info={item}/>
            )
        })
        console.log('The state: ',this.state);
        return(
            <div className="d-flex space-between row">
                {movieList}
            </div>
        )
    }
}

export default MovieContainer;