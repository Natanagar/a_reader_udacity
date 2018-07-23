import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1,
      starColor: '#ffb400'
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({
      rating: nextValue,
      starColor: '#ff6666'
    });
  }
 
  render() {
    const { rating : rating,
            starColor : starColor } = this.state;
    //console.log(this.state);
    return (                
      <div>
        <h2>Book's rating: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 export default Rating;