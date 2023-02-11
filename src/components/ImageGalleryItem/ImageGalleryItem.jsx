import '../ImageGalleryItem/ImageGalleryItem.css';

export function ImageGalleryItem({ webformatURL, largeImageURL, onImageClick }) {
  return (
    <li
      onClick={() => onImageClick(largeImageURL)}
      className="imageGalleryItem"
    >
      <img className="imageGalleryItem-image" src={webformatURL} alt="" />
    </li>
  );
}