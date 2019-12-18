import React from 'react';
import PostButtons from './01_PostButtons';

const DescInput = ({ editing, setEditing, original, post, handleChange, handleCancel, handleSubmit}) => {
  return (
    <div className='IQ-dash-input'>
      <div className='post-row'>
        <span className='IQ-dash-heading'>
          <h4 className="tag-title">DESCRIPTION</h4>
        </span>
        {editing[3] ? (
          <div>
            <textarea
              id='edit-post-3'
              type='textarea'
              name='description'
              value={post.description}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className='post-desc'>
            <p>{original && original.description}</p>
          </div>
        )}
      </div>
      <div className='edit-btns'>
        <PostButtons
          index={3}
          editing={editing}
          setEditing={setEditing}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default DescInput;