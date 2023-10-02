const settingsTab = document.querySelector('.settings-tab');
const filterButton = document.querySelector('.filter-tab-button');
const sortButton = document.querySelector('.sort-tab-button');
const filterSearchButton = document.querySelector('.filter-search-button');
const sortSearchButton = document.querySelector('.sort-search-button');
const filterClearButton = document.getElementById('filter-clear-button');
const sortClearButton = document.getElementById('sort-clear-button');
const filterContent = document.getElementById('filter-tab-content');
const sortContent = document.getElementById('sort-tab-content');
const filterButtonsContainer = document.querySelector('.filter-buttons');
const sortButtonsContainer = document.querySelector('.sort-buttons');
const sortOptions = document.querySelectorAll('.sort-option input[type="radio"]');
const filterOptions = document.querySelectorAll('.filter-option input[type="checkbox"]');

// Initial setup
settingsTab.classList.add('filter-mode');
filterContent.style.display = 'block';
sortContent.style.display = 'none';
filterButtonsContainer.style.display = 'flex'; // Show filter buttons
sortButtonsContainer.style.display = 'none';   // Hide sort buttons
filterSearchButton.style.display = 'none';
sortClearButton.style.display = 'none';
filterClearButton.style.display = 'none';


filterButton.addEventListener('click', function() {
    // Switch to sort mode
    settingsTab.classList.remove('filter-mode');
    settingsTab.classList.add('sort-mode');
    filterContent.style.display = 'none';
    sortContent.style.display = 'block';
    filterButton.style.display = 'none';
    sortButton.style.display = 'block';
    filterButtonsContainer.style.display = 'none'; // Hide filter buttons
    sortButtonsContainer.style.display = 'flex';   // Show sort buttons
    updateSearchButtonVisibility();
});

sortButton.addEventListener('click', function() {
    // Switch to filter mode
    settingsTab.classList.remove('sort-mode');
    settingsTab.classList.add('filter-mode');
    filterContent.style.display = 'block';
    sortContent.style.display = 'none';
    filterButton.style.display = 'block';
    sortButton.style.display = 'none';
    filterButtonsContainer.style.display = 'flex'; // Show filter buttons
    sortButtonsContainer.style.display = 'none';   // Hide sort buttons
    updateSearchButtonVisibility();
});

function updateSearchButtonVisibility() {
  let isFilterChecked = Array.from(filterOptions).some(option => option.checked);
  let isSortChecked = Array.from(sortOptions).some(option => option.checked);

  // Reset visibility
  filterSearchButton.style.display = 'none';
  sortSearchButton.style.display = 'none';
  filterClearButton.style.display = 'none';
  sortClearButton.style.display = 'none';

  // Check if we're in filter mode
  if (filterContent.style.display === 'block') {
      if (isFilterChecked) {
          filterSearchButton.style.display = 'block';
          filterClearButton.style.display = 'block';
      }
  }

  // Check if we're in sort mode
  if (sortContent.style.display === 'block') {
      if (isSortChecked) {
          sortSearchButton.style.display = 'block';
          sortClearButton.style.display = 'block';
      }
  }
}


filterOptions.forEach(option => {
    option.addEventListener('change', updateSearchButtonVisibility);
});

sortOptions.forEach(option => {
    option.addEventListener('change', updateSearchButtonVisibility);
});

filterClearButton.addEventListener('click', function() {
  filterOptions.forEach(option => {
      option.checked = false;
  });
  updateSearchButtonVisibility();
});

sortClearButton.addEventListener('click', function() {
  sortOptions.forEach(option => {
      option.checked = false;
  });
  updateSearchButtonVisibility();
});

