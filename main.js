import './style.css';
import { cars } from './src/data/cars.js';
import { createSearchFilters } from './src/components/SearchFilters.js';
import { createCarList } from './src/components/CarList.js';

function initializeApp() {
  const app = document.querySelector('#app');
  
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>CarMarket</h1>
    <p>Find your perfect ride</p>
  `;

  const filters = createSearchFilters((filterOptions) => {
    // Filter implementation would go here
    console.log('Filtering with:', filterOptions);
  });

  const carList = createCarList(cars);

  app.appendChild(header);
  app.appendChild(filters);
  app.appendChild(carList);
}

initializeApp();