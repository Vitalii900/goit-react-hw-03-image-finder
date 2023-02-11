import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import '../ImageGallery/ImageGallery.css';

export function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="imageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onImageClick={onImageClick}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
}
