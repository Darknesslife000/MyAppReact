import './Imageitem.css';

function Imageitem(props) {
    const { maket, onimgClick } = props;
    return(
        <div className="Image-item">
            <h4>{maket.title}</h4>
            <img src={maket.thumbUrl} onClick={() => {onimgClick(maket)}} />
        </div>
    );
}

export default Imageitem;