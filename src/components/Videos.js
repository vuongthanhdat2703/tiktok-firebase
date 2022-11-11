import React, { useState ,useRef } from 'react'
import { FaMusic, FaHeart, FaComment, FaShare } from 'react-icons/fa';

const VideoInfo = ({avatar,idName,name}) => {
    return (
        <div className='content flex flex-row'>
            <img className='w-[50px] h-[50px] rounded-full' src={avatar} alt="avt" />
            <div className='ml-3 min-w-[80%]'>
                <div>
                    <a href='#' className='name flex'>{idName}</a>
                    <a href='#' className='tilte'>{name}</a>
                </div>
                <div>
                    qua tuyet voi
                </div>
                <div className='flex flex-row items-center'>
                    <FaMusic />< span className='ml-3' >Bai hat danh phat</span>
                </div>
            </div>
            <div>
                <button className='p-1 pl-3 pr-3 border-2 border-red-400 text-red-300 rounded-md'>Follow</button>
            </div>
        </div>
    );
};
const VideoContent = () => {
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
    return (
        <div className='flex flex-row'>
            <video
                ref={videoRef}
                onClick={handleVideo}
                className='w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4' 
                src="https://v16-webapp.tiktok.com/b1a150f42cdd75a508239882590d3247/636eba7d/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ad52c18c574847938f1136afdea6db27/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2490&bt=1245&cs=0&ds=3&ft=6-LrVjqM9wUxRelyXN6~OiXf3bgIHCfxtxHYh9kaIRkSgl&mime_type=video_mp4&qs=0&rc=Mzk1ZTc3ZzpnOGlpNGVlOkBpM3l0cWc6Zm1oZzMzZjgzM0BeYi5eNl42NTQxMC8yNTRhYSM1ZmMucjQwZmpgLS1kL2Nzcw%3D%3D&l=20221111151022010251058182164035D9&btag=80000"
                loop
                />
            <div className='flex flex-col justify-end ml-5 mb-3 text-center'>
                <div>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaHeart className='text-xl' /></div>
                </div>
                <span>2312</span>
                <div>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaComment className='text-xl' /></div>
                </div>
                <span>23</span>
                <div>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaShare className='text-xl' /></div>
                </div>
                <span>2</span>

            </div>
        </div>
    );
};
const Videos =({data})=> {
    return (
        <div className=' snap-start max-w-[600px] border-b-2 border-gray-200 pb-5 pt-5' >
            <VideoInfo avatar={data.avatar} idName={data.idName} name={data.name} />
            <VideoContent />
        </div>
    );
};
export default Videos;
