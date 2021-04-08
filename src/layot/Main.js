import React from 'react';
import {MovieList} from '../component/MovieList';
import {Preloader} from '../component/Preloader';
import {Search} from '../component/Search';


class Main extends React.Component {
    state = {
        movies: []
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=6e1488e9&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    };

    searchMovies = (str = 'matrix', type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=6e1488e9&s=${str !== '' ? str : 'matrix'}${type !== 'all' ?`&type=${type}`:''}`)
            .then(response => response.json())
             .then(data => this.setState({movies: data.Search}))

    };


    render() {
        const {movies} = this.state;

        return <main className='container content'>
            <Search searchMovies = {this.searchMovies}/>
            {
                movies.length ? (<MovieList  movies = {this.state.movies}/>) :
                    <Preloader/>
            }

        </main>
    };
}

export {Main};