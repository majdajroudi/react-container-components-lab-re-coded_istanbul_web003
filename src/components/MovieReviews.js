// Code MovieReviews Here
import React, {Component} from "react"
import LatestMovie from "./LatestMovieReviewsContainer.js"
import Searchable from "./SearchableMovieReviewsContainer.js"

const MovieReviews = (reviews) => {
        return (
            <div className="review-list">
                <div className="review">
                    {reviews.reviews !== undefined?
                        reviews.reviews.slice(0,2).map(review => {
                        return (
                            <div className="review">
                                <p>author: {review.byline}</p>
                                <p>headline: {review.headline}</p>
                                <p>Review: {review.summary_short}</p>
                            </div>
                        )
                    }): "no data available"}
                </div>
            </div>
        )
}

export default MovieReviews;