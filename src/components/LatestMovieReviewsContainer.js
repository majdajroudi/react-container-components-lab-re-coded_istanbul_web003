import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state= {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState({reviews: data.results, fetchDone: true}))
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
            <div className="latest-movie-reviews">
                {this.renderReviews()} 
            </div>
        )
    }
}