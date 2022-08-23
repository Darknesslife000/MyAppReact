import './ImagePost.css';

function ImagePost(props) {
    const {maket, onBgClick} = props;

    return(
        <div className="image-post">
            <div className="image-post-bg" onClick={onBgClick} />
            <div className="image-post-content">
                <h4>{maket.title}</h4> 
                <img src={maket.fullUrl} />

            </div>
        </div>
    );
}

export default ImagePost;