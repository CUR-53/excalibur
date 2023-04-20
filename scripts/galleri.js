let collectionView = document.querySelector('.collection-view');
let collection = document.querySelectorAll('.collection');

collection.forEach((item) => {
  item.addEventListener('click', () => {
    collectionView.classList.add('active');
  });
});

collectionView.addEventListener('click', () => {
  collectionView.classList.remove('active');
});
