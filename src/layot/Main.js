import React from 'react';
import {MovieList} from '../component/MovieList';

class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=6e1488e9&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;

        return <main className='container content'>
            {
                movies.length ? (<MovieList  movies = {this.state.movies}/>) :
                    <h3>Loading...</h3>
            }

        </main>
    };
}

export {Main};