
const Gallary = () => {
    return (
      <div className="gallery">
        <div className="gallery-header">
          <button id="winter">Gallery</button>
          
          <button className="add-button">+ Add Image</button>
          <button className="prev-button">{"<-"}</button>
          <button className="next-button">{"->"}</button>
        </div>
        <div className="image-carousel">
          
          <div className="images">
            <img src="image1.jpg" alt="gallery img-1" />
            <img src="image2.jpg" alt="gallery-img-2" />
            <img src="image3.jpg" alt="gallery-img-3" />
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Gallary;