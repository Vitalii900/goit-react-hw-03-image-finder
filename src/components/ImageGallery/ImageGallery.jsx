import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images, onImageClick }) {
  return (
    <ul class="gallery">
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
