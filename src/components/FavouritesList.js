import React from "react";
import Favourite from "./Favourite";

class FavouritesList extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(e, film) {
        if (e.target.classList.value == this.props.delFavClass) {
            this.props.receiveFav(film)
        } else if (e.target.classList.value == this.props.titleClass) {
            this.props.receiveFilmID(film.imdbID)
        } else {
            console.log(`move this item up`);
            this.props.receiveMove(film);
        }
    };


    render() {
        return (
            <section id="account" className="account--active">
                <div id="favourites">
                    <h3 id="favourites__title">Your favourites</h3>
                    <ul id="favourites__list" >
                        {this.props.favouritesList.map(film => {
                            return <Favourite key={film.imdbID} details={film} delFavClass={this.props.delFavClass} moveFavClass={this.props.moveFavClass} titleClass={this.props.titleClass} onClick={e => this.handleClick(e, film)} />
                        })}
                    </ul>
                </div>
            </section>
        )
    }
}
export default FavouritesList;