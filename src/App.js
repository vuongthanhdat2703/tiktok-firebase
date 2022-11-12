
import { useEffect, useState ,useMemo} from 'react';
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
      
      setVideos(result)
    })
    // document.getElementById("focus").focus()
  }, []);
  return (
    <div id='focus' tabIndex="1" className="flex flex-col items-center snap-mandatory overflow-scroll h-screen overflow-x-hidden">
      {videos.map((item, index)=>(
        <Videos data={item} key={index} />
      ))}
    </div>
  );
  
}
export const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisibile;
};

export default App;
