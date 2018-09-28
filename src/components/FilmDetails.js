import React from 'react';

class FilmDetails extends React.Component {



    render() {

        const ratingsStyle = {
            backgroundImage: `linear-gradient(to right, orangered, orangered ${this.props.filmDetails.imdbRating * 10}%, rgba(0, 0, 0, 0) ${this.props.filmDetails.imdbRating * 10}%`
        }



        return (
            <div className="film-details__wrapper" >
                <h3 className="film-details__title">{this.props.filmDetails.Title}</h3>
                <button id="fav" className="btn btn__fav" data-id="tt0372784"><i className="fas fa-heart"></i></button>
                <img className="film-details__poster" src={this.props.filmDetails.Poster} alt="poster" />
                <h4 className="film-details__director">{this.props.filmDetails.Director}</h4>
                <p className="film-details__meta">(Released {this.props.filmDetails.Year}, dur. {this.props.filmDetails.Runtime}, {this.props.filmDetails.Rated})</p>
                <div className="film-details__rating">
                    <p className="film-details__ratings__imdb"><strong>Rating:</strong></p>
                    <div className="film-details__rating__bar" style={ratingsStyle}></div>
                    <p className="film-details__rating__score">{this.props.filmDetails.imdbRating} out of 10</p>
                </div>
                <h4>Starring</h4>
                <p className="film-details__actors">
                    {this.props.filmDetails.Actors}</p>
                <h4>Plot summary</h4>
                <p className="film-details__plot">{this.props.filmDetails.Plot}</p>
            </div>
        )
    }
}

export default FilmDetails;