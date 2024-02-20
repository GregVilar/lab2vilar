function Gallery(props) {
  return (
    <div className="gallery">
      <div className="gallery-img">
        <img
          src={props.galleryImgObj.photoName}
          alt={props.galleryImgObj.name}
          style={{ width: "100%", height: "auto" }}
        />

        {props.galleryImgObj.quantity === 0 ? (
          <p className="danger">Out of Stock</p>
        ) : (
          <p className="success">In Stock</p>
        )}

        <div></div>

        {props.galleryImgObj.price <= 150 ? (
          <p className="green">Mura lang guys</p>
        ) : (
          <p className="red">Mahal guys</p>
        )}

        <p className="price">{props.galleryImgObj.price}</p>
        <div className="desc">{props.galleryImgObj.name}</div>
      </div>

      <button className="button">ORDER NOW</button>
    </div>
  );
}

export default Gallery;
