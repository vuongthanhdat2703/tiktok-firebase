
import { useEffect, useState } from 'react';
import './App.css';
import Videos from './components/Videos'
import VideoService from './services/video'
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    VideoService.getAll().onSnapshot(items => {
      let result = []
      console.log(typeof items)
      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        result.push({
          id,
          ...data
        })
      });
      console.log(1111, result.find(item=>item.id==="QABivwFLrRWKV44z6Vt1ddd"))
      setVideos(result)
    })
    // document.getElementById("focus").focus()
  }, []);
  return (
    <div id='focus' tabindex="1" className="flex flex-col items-center snap-mandatory overflow-scroll h-screen overflow-x-hidden">
      {videos.map((item, index)=>(
        <Videos data={item} key={index} />
      ))}
    </div>
  );
}

export default App;
