import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie({title,poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Colums">
                <MoviePoster poster={poster} alt={title}></MoviePoster>
            </div>
            <div className="Movie_Colums">
                <h1>{title}</h1>
                <div className="Movie_Genre">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index}></MovieGenre>)}
                </div>
                <div className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster,alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"></img>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}

Movie.propTypes={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    postar:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}

MovieGenre.propTypes={
    genre:PropTypes.string.isRequired
}

export default  Movie;