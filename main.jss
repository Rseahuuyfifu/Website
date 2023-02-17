const searchButton = document.querySelector('.buy button');
const searchInput = document.querySelector('.buy input');
const cardContainer = document.querySelector('.card-container');

// Define car data
const carData = [
  {
    name: 'Toyota Hiace',
    image: 'images/Toyota Hiace.png',
    price: 50000
  },
  {
    name: 'Toyota Bus',
    image: 'images/Toyota Bus.jpg',
    price: 35000
  },
  {
    name: 'Isuzu Truck',
    image: 'images/Isuzu truck.png',
    price: 40000
  },
  {
    name: 'Motorcycle',
    image: 'images/Motorcycle.png',
    price: 25000
  },
  {
    name: 'Vitz',
    image: 'images/Vitz.jpg',
    price: 25000
  }
];

// Add event listener to search button
searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Filter car data
  const filteredCars = carData.filter(function(car) {
    return car.name.toLowerCase().includes(searchTerm);
  });

  // Clear card container
  cardContainer.innerHTML = '';

  // Display filtered cars
  filteredCars.forEach(function(car) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', car.image);
    cardImage.setAttribute('alt', car.name);
    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    const cardName = document.createElement('h2');
    cardName.textContent = car.name;
    const cardPrice = document.createElement('p');
    cardPrice.textContent = 'Price: $' + car.price;
    const cardLink = document.createElement('a');
    cardLink.setAttribute('href', '#');
    cardLink.textContent = 'View Details';

    cardText.appendChild(cardName);
    cardText.appendChild(cardPrice);
    cardText.appendChild(cardLink);
    card.appendChild(cardImage);
    card.appendChild(cardText);
    cardContainer.appendChild(card);
  });
});
