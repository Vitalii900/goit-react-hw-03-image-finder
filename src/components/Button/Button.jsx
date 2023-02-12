import '../Button/Button.css'

export function Button({ loadMore }) {
  return (
    <button onClick={loadMore} className="button" type="button">
      Load more
    </button>
  );
}