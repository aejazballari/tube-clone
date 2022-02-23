import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import './_watchScreen.scss'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getVideoById} from '../../redux/actions/videos.action'

const WatchScreen = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoById(id))
  }, [dispatch, id])

  const {video, loading} = useSelector(state => state.selectedVideo)
  console.log(loading);
  return (
    <Row>
        <Col lg={8}>
           <div className='watchScreen_player'>
            <iframe src={`https://www.youtube.com/embed/${id}`}
                frameBorder='0'
                title={video?.snippet?.title}
                allowFullScreen
                width='100%'
                height='100%'
                >
            </iframe>
           </div>
           {
             !loading ? <VideoMetaData video={video} videoId={id}/> : <h6>Loading...</h6>
           }
           <Comments />
        </Col>
        <Col lg={4}>
            {
                [...Array(20)].map(() => <VideoHorizontal />)
            }
        </Col>
    </Row>
  )
}

export default WatchScreen