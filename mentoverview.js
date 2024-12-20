let monthAndYear = document.querySelector('.month1-year1');

let newDate = new Date();
    
    let currentMonthInWord = newDate.toLocaleString('default', { month: 'long' });
    let currentYear = newDate.getFullYear();    
    monthAndYear.innerHTML = `<h5 class="box bg-white rounded-1">${currentMonthInWord}</h5> <h5 class="box bg-white rounded-1">${currentYear}</h5>`;



function generateDatesByDay(year, month) {
    const daysOfWeek = ["Sun", "Mo", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const calendarDiv = document.getElementById("calendar");

    // Create a column for each day of the week
    daysOfWeek.forEach(day => {
      const colDiv = document.createElement("div");
     
      colDiv.innerHTML = `<h4 class="fs-modal">${day}</h4>`;
      colDiv.id = day.toLowerCase();
      calendarDiv.appendChild(colDiv);
    });

    // Loop through the days of the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let date = 1; date <= daysInMonth; date++) {
      const currentDate = new Date(year, month, date);
      const dayName = daysOfWeek[currentDate.getDay()];

      // Add the date under the corresponding day column
      const dayColumn = document.getElementById(dayName.toLowerCase());
      const dateElement = document.createElement("div");
      dateElement.textContent = date;
      dayColumn.appendChild(dateElement);
      
    }
  }

  generateDatesByDay(2024, 11);


  let container = document.querySelector('.overlay1 ');

  let step1 = document.querySelector('#step1');
  let step2 = document.querySelector('#step2');
  let step3 = document.querySelector('#step3');
  let step4 = document.querySelector('#step4');
console.log(step1)
console.log(step2)
console.log(step3)

const changeOne =()=>{
  step1.style.display = 'none'
  step2.style.display = 'flex'
  step3.style.display = 'none'
  step4.style.display = 'none'

}

const changeTwo =()=>{
  step1.style.display = 'none'
  step2.style.display = 'none'
  step3.style.display = 'flex'
  step4.style.display = 'none'
 
}

const changeThree =()=>{
  step1.style.display = 'none'
  step2.style.display = 'none'
  step3.style.display = 'none'
step4.style.display = 'flex'
 
}