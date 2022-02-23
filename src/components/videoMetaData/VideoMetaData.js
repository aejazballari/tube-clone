import React, { useEffect } from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'

import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//    checkSubscriptionStatus,
//    getChannelDetails,
// } from '../../redux/actions/channel.action'
import HelmetCustom from '../HelmentCustom'
const VideoMetaData = () => {
   // const { channelId, channelTitle, description, title, publishedAt } = snippet
   // const { viewCount, likeCount, dislikeCount } = statistics

   // const dispatch = useDispatch()

   // const {
   //    snippet: channelSnippet,
   //    statistics: channelStatistics,
   // } = useSelector(state => state.channelDetails.channel)

   // const subscriptionStatus = useSelector(
   //    state => state.channelDetails.subscriptionStatus
   // )

   // useEffect(() => {
   //    dispatch(getChannelDetails(channelId))
   //    dispatch(checkSubscriptionStatus(channelId))
   // }, [dispatch, channelId])

   return (
      <div className='py-2 videoMetaData'>
         <HelmetCustom title='title' description='description' />

         <div className='videoMetaData__top'>
            <h5>title</h5>
            <div className='py-1 d-flex justify-content-between align-items-center'>
               <span>
                  {numeral(100000).format('0.a')} Views •{' '}
                  {moment(100000).fromNow()}
               </span>

               <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} /> {numeral(100000).format('0.a')}
                  </span>
                  <span className='mr-3'>
                     <MdThumbDown size={26} />{' '}
                     {numeral(100000).format('0.a')}
                  </span>
               </div>
            </div>
         </div>
         <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
               <img
                  src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                  alt=''
                  className='mr-3 rounded-circle'
               />
               <div className='d-flex flex-column'>
                  <span>channelTitle</span>
                  <span>
                     {' '}
                     {numeral(100000).format(
                        '0.a'
                     )}{' '}
                     Subscribers
                  </span>
               </div>
            </div>

            <button
               className={`p-2 m-2 border-0 btn `}>
               {'Subscribe'}
            </button>
         </div>
         <div className='videoMetaData__description'>
            <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, voluptatum. Hic eligendi ab cupiditate praesentium aut laudantium dignissimos pariatur! Placeat reiciendis dolorum laboriosam, quisquam natus tenetur ex perferendis numquam nobis cum, delectus recusandae! Voluptatibus suscipit nihil tempore dolores eveniet fugit explicabo exercitationem animi odit iure libero, architecto nostrum ipsam laudantium debitis blanditiis rerum asperiores quae accusamus? Quis repudiandae aut porro optio, itaque ullam excepturi quasi ex sunt, provident repellendus ea. Recusandae rem deserunt ullam unde aliquid, dolorem magnam ab nobis ea et voluptatibus maiores minus velit ducimus. Tenetur blanditiis fugiat beatae commodi, pariatur ipsum a veritatis, minus facilis eum ut?
            </ShowMoreText>
         </div>
      </div>
   )
}

export default VideoMetaData