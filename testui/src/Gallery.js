function Gallery(props) {
  return (
    <div className="gallery">
      <div className="gallery-img">
        <img
          src={props.galleryImgObj.photoName}
          alt={props.galleryImgObj.name}
          style={{ width: "100%", height: "auto" }}
        />
        <p className="price">{props.galleryImgObj.price}</p>
        <div className="desc">{props.galleryImgObj.name}</div>
      </div>

      <button className="button">ORDER NOW</button>
    </div>
  );
}

export default Gallery;
