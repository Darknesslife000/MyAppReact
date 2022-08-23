import {useState} from 'react';
import './App.css';
import AppHeader from './component/AppHeader';
import Imageitem from './component/Imageitem';
import ImagePost from './component/ImagePost';
import maketdata from './data/maket';


function App() {
    const [seeImage, setSeeImage] = useState(null);

    function onImageClick(numImage) {
        setSeeImage(numImage);
    }

    function onImageClose() {
        setSeeImage(null);
    }

    const maketmap = maketdata.map((maket, index) => {
        return <Imageitem key={index} maket={maket} onimgClick={onImageClick} />;
    });

    let maketImage = null;
    if(!!seeImage) {
        maketImage = <ImagePost maket={seeImage} onBgClick={onImageClose} />
    }

  return (
    <div className="App">
        <AppHeader />
        <div className="App-grid">
            {maketmap}
        </div>
        {maketImage}
    </div>
  );
}

export default App;
