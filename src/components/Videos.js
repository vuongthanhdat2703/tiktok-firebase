import React, { useState ,useRef ,useEffect} from 'react'
import { FaMusic, FaHeart, FaComment, FaShare } from 'react-icons/fa';
import {useElementOnScreen} from "../App"
const VideoInfo = ({avatar,idName,name,content,music}) => {
    return (
        <div className='content flex flex-row'>
            <img className='w-[50px] h-[50px] rounded-full' src={avatar} alt="avt" />
            <div className='ml-3 min-w-[80%]'>
                <div>
                    <a href='#' className='name flex'>{idName}</a>
                    <a href='#' className='tilte'>{name}</a>
                </div>
                <div>
                    {content}
                </div>
                <div className='flex flex-row items-center'>
                    <FaMusic />< span className='ml-3' >{music}</span>
                </div>
            </div>
            <div>
                <button className='p-1 pl-3 pr-3 border-2 border-red-400 text-red-300 rounded-md'>Follow</button>
            </div>
        </div>
    );
};
const VideoContent = ({video,like,comment,share}) => {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);

        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      };
      const isVisibile = useElementOnScreen(options, videoRef);
    
        useEffect(() => {
        if (isVisibile) {
          if (!playing) {
            videoRef.current.play();
            setPlaying(true);
          }
        } else {
          if (playing) {
            videoRef.current.pause();
            setPlaying(false);
          }
        }
      }, [isVisibile]);
    return (
        <div className='flex flex-row'>
            <video
                ref={videoRef}
                onClick={handleVideo}
                className='w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4' 
                src={video}
                loop
                />
            <div className='flex flex-col justify-end ml-5 mb-3 text-center'>
                <div>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaHeart className='text-xl' /></div>
                </div>
                <span>{like}</span>
                <div>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaComment className='text-xl' /></div>
                </div>
                <span>{comment}</span>
                <div>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaShare className='text-xl' /></div>
                </div>
                <span>{share}</span>

            </div>
        </div>
    );
};
const Videos =({data})=> {
    return (
        <div className=' snap-start max-w-[600px] border-b-2 border-gray-200 pb-5 pt-5' >
            <VideoInfo {...data}/>
            <VideoContent {...data}/>
        </div>
    );
}
export default Videos;
