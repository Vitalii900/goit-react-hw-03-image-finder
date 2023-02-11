export function ImageGalleryItem({ webformatURL, largeImageURL, onImageClick }) {
  return (
    <li onClick={() => onImageClick(largeImageURL)} class="gallery-item">
      <img src={webformatURL} alt="" />
    </li>
  );
}