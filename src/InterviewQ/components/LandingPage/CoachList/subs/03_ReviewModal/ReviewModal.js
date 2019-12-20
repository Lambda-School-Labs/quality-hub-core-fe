import React, { useEffect } from 'react';
import { star, greystar } from '../../../../../../global/icons/star';
import ReviewCard from './ReviewCard';
import './ReviewModal.scss';

const ReviewModal = ({ reviewnode, openReviewModal, reviewModal, reviewList, rating }) => {

  useEffect(() => {
		if (reviewModal) {
			document.addEventListener('mousedown', handleOutsideClick);
		} else {
			document.removeEventListener('mousedown', handleOutsideClick);
		}
	}, [reviewModal]);
	
	const handleOutsideClick = e => {
		if (reviewnode.current) {
			if (reviewnode.current.contains(e.target)) {
				return;
			} else {
				openReviewModal(false);
			}
		} else {
			openReviewModal(false);
		}
  };
  
	return (
		<div className='iq-review-modal' ref={reviewnode}>
      <div id='overlay-coachcard-expand' onClick={() => openReviewModal(false)}></div>
			<div className='iq-review-modal-header'>
				<h2>Reviews</h2>
			</div>
			<div className='iq-review-modal-subheader'>
				<div className='iq-review-modal-subheader-left'>
					<p className='average'>{rating}</p>
					<p className='badge'>Solid!</p>
				</div>
				<div className='iq-review-modal-subheader-right'>
					<div className='iq-review-modal-stars'>
          {rating >= .5 ? star() : greystar()}
        {rating >= 1.5 ? star() : greystar()}
        {rating >= 2.5 ? star() : greystar()}
        {rating >= 3.5 ? star() : greystar()}
        {rating >= 4.5 ? star() : greystar()}
          </div>
					<div className='iq-review-modal-total'>{reviewList.length} Reviews</div>
				</div>
			</div>
      <div className='iq-review-modal-review-list'>
        {reviewList.map(review => <ReviewCard review={review}/>)}
      </div>
		</div>
	);
};

export default ReviewModal;