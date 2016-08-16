import React, {Component} from 'react';

class Reviews extends Component {
    render(){
        
        var reviews = this.props.review.guest_reviews.map((review) => {
            return (
                <div>
                    <h4 className="usertitle">{review.title}</h4>
                    <h5 className="userrating">Rating: {review.rating}</h5>
                    <p className="usersummary">{review.summary}</p>
                    <br />
                </div>
            );
        });
        
        var rating = this.props.review.guest_rating;
        return (
            <div id="reviews">
                <h3 id='reviewtitle'>Overall Guest Rating: {rating}</h3>
                <h4>Recent Reviews: </h4>
                <br/>
                <div className="userreviews">
                    {reviews}
                </div>
            </div>
        );
    }
}

export default Reviews;