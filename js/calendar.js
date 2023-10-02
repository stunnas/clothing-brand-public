document.addEventListener('DOMContentLoaded', function() {
    let currentDate = new Date(2023, 8, 1); // Starting with October 2023
    let currYear = currentDate.getFullYear();
    let currMonth = currentDate.getMonth();
    console.log(currMonth);
    let currDay = currentDate.getDay();

    function updateCalendarHeader() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        document.querySelector('.calendar-header h2').textContent = `${monthNames[currMonth]} ${currYear}`;
    }
    
    function updateCalendarColors() {
        const daysElements = document.querySelectorAll('.days li');
    
        for (let i = 0; i < daysElements.length; i++) {
            const dayElement = daysElements[i];
            if (dayElement.classList.contains('drop-day')) {
                dayElement.classList.add('drop-day'); // This will apply the styles you defined in the CSS
            } else if (dayElement.classList.contains('active-day')) {
                dayElement.classList.add('active-day'); // This will apply the styles you defined in the CSS
            } else if (dayElement.classList.contains('inactive-day')) {
                dayElement.classList.add('inactive-day');
            }
        }
    }
    

    function loadContentForDate() {
        // Clear existing days
        const daysContainer = document.querySelector('.days');
        daysContainer.innerHTML = '';
    
        // Get the number of days in the current month
        const daysInMonth = new Date(currYear, currMonth + 1, 0).getDate();
    
        // Get the day of the week for the first day of the month
        const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    
        // Add "inactive" days for the previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const li = document.createElement('li');
            li.classList.add('inactive-day');
            li.textContent = new Date(currYear, currMonth, i - firstDayOfMonth + 1).getDate();
            daysContainer.appendChild(li);
        }
    
        // Add days for the current month
        for (let i = 1; i <= daysInMonth; i++) {
            const li = document.createElement('li');
            li.textContent = i;
            if ((i === 18 && currMonth === 8 && currYear === 2023)
             || (i === 3 && currMonth === 9 && currYear === 2023)
             || (i === 7 && currMonth === 9 && currYear === 2023)) { // October is month 9 (0-indexed)
                li.classList.add('drop-day');
            }
            if (i === 28 && currMonth === 8 && currYear === 2023) {
                li.classList.add('active-day');
            }
            daysContainer.appendChild(li);
        }
    
        // Optionally, add "inactive" days for the next month to fill the calendar (if needed)
        const daysInContainer = daysContainer.children.length;
        const daysToFill = 42 - daysInContainer; // 6 weeks * 7 days = 42
        for (let i = 1; i <= daysToFill; i++) {
            const li = document.createElement('li');
            li.classList.add('inactive-day');
            li.textContent = i;
            daysContainer.appendChild(li);
        }
    
        console.log(`Loading content for ${currentDate}`);

        const modal = document.getElementById('drop-day-modal');
        const closeBtn = document.querySelector('#modal-close');

        // Show the modal when a "drop day" is clicked
        document.querySelectorAll('.days li.drop-day').forEach(day => {
            day.addEventListener('click', function() {
                modal.style.display = 'block';
            });
        });

        // Close the modal when the close button is clicked
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Close the modal when anywhere outside the modal content is clicked
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
    

    document.getElementById('previous-button').addEventListener('click', function() {
        if (currentDate.getMonth() === 0) {
            currentDate.setFullYear(currYear - 1);
            currentDate.setMonth(11);
            currYear = currentDate.getFullYear();
            currMonth = currentDate.getMonth();
        } else {
            currentDate.setMonth(currMonth - 1);
            currMonth = currentDate.getMonth();
        }
        updateCalendarHeader();
        loadContentForDate();
        updateCalendarColors();
    });

    document.getElementById('next-button').addEventListener('click', function() {
        if (currentDate.getMonth() === 11) {
            currentDate.setFullYear(currYear + 1);
            currentDate.setMonth(0);
            currYear = currentDate.getFullYear();
            currMonth = currentDate.getMonth();
        } else {
            currentDate.setMonth(currMonth + 1);
            currMonth = currentDate.getMonth();
        }
        updateCalendarHeader();
        loadContentForDate();
        updateCalendarColors();
    });

    // Initial load
    updateCalendarHeader();
    loadContentForDate();
    updateCalendarColors();
});
