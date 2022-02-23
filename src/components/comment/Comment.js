import React from 'react'
import moment from 'moment'
import './_comment.scss'
const Comment = () => {
   // const {
   //    authorDisplayName,
   //    authorProfileImageUrl,
   //    publishedAt,
   //    textDisplay,
   // } = comment

   return (
      <div className='p-2 comment d-flex'>
         <img
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            alt=''
            className='mr-3 rounded-circle'
         />
         <div className='comment__body'>
            <p className='mb-1 comment__header'>
               author name • {moment(100000).fromNow()}
            </p>
            <p className='mb-0'>{'textDisplay'}</p>
         </div>
      </div>
   )
}

export default Comment