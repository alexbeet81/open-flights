import React from 'react'

const ReviewForm = (props) => {
  return (
    <div className="wrapper">
      <form>
        <div>Have an Experience with [airline name]? Sure your reivew!</div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title"/>
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Review Description" />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="raiting-title-text">Rate This Airline</div>
            [Star Rating Goes Here]
          </div>
        </div>
         <button type="submit">Submit your review</button>
      </form>
    </div>
  )
}

export default ReviewForm