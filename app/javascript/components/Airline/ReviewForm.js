import React, { Fragment } from 'react'
import styled from 'styled-components'

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`

const RatingBox = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  lable {

  }
`

const RatingTitle = styled.div``

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map( (score, index) => {
    return (
      <Fragment>
        <input type="radio" value={score} name="rating" onChange={() => console.log('seleceted:', score)} id={`raiting-${score}`}></input>
        <label></label>
      </Fragment>
    )
  })

  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>Have an Experience with {props.attributes.name}? Sure your reivew!</div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
        </div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description" />
        </div>
        <div className="field">
          <RatingContainer>
            <div className="raiting-title-text">Rate This Airline</div>
            <div className="raitingBox">
              {ratingOptions}
            </div>
          </RatingContainer>
        </div>
         <button type="submit">Submit your review</button>
      </form>
    </div>
  )
}

export default ReviewForm