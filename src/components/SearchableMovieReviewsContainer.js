import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'+`api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state= {
            reviews: [],
            searchTerm: ""
        }
    }

    handleInputChange(e) {
        this.setState({searchTerm: e.target.value})
        console.log(URL+`&query=${this.state.searchTerm}`)
    }

    handleFormSubmit(e) {
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => this.setState({reviews: data.results}))
        .catch(error => console.log(error))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.reviews !== prevState.reviews) {
          this.renderReviews()
        }
      }

    renderReviews = () => {
        return <MovieReviews reviews={this.state.reviews} /> 
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <input onChange={(e) => this.handleInputChange(e)} value={this.state.searchTerm} />
                    <button onClick={(e) => this.handleFormSubmit(e)}>Search</button>
                </form>
                {this.renderReviews()}
            </div>
        )
    }
}