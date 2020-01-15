import React from 'react';

const ResumeReviewEntry = ({
  entry,
  entry: { seeker, createdAt },
  submitResponse,
  updateResumeReview,
  refetch
}) => {

  console.log(`ResumeReviewEntry / submitResponse`, submitResponse)
  console.log(`ResumeReviewEntry / entry`, entry)

  const handleAccept = e => {
    e.preventDefault()

    submitResponse({
      variables: {
        id: entry.id,
        isAccepted: true,
        isPending: false,
        isDenied: false
      }
    })
  }


  const handleDecline = e => {
    e.preventDefault()

    submitResponse({
      variables: {
        id: entry.id,
        isAccepted: false,
        isPending: false,
        isDenied: true
      }
    })
    
  }


  const handleUpdate = e => {
    e.preventDefault();

    updateResumeReview({
      variables: {
        id: entry.id,
        isComplete: true
      }
    })
  }

  return (
    <div>
      <div>
        <p>{createdAt}</p>
        <p>{seeker.first_name} {seeker.last_name}</p>
        <p>{seeker.email}</p>
        {entry.status === 'Pending' &&
          <div>
            <button onClick={handleAccept}>Accept</button>}
        <button onClick={handleDecline}>Decline</button>
          </div>
        }
        {entry.status === 'In Progress' &&
          <div>
            <button onClick={handleUpdate}>Mark Completed</button>
          </div>

        }
        {entry.status === 'Completed' && 
          <div>
            <p>Completed at {entry.dateCompleted}</p>
            </div>}

      </div>
    </div>
  );
};

export default ResumeReviewEntry;