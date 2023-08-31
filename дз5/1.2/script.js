const switchButton = document.getElementById('switchButton');
const messageDiv = document.getElementById('message');
let isOn = JSON.parse(localStorage.getItem('isOn')) || false;
let storedDate = localStorage.getItem('lastDate');

// Зберігаємо поточний колір фону сторінки
const currentBackgroundColor = document.body.style.backgroundColor;
localStorage.setItem('pageColor', currentBackgroundColor);

window.addEventListener('DOMContentLoaded', function() {
  // Отримання даних зі збереженого локального сховища
  isOn = JSON.parse(localStorage.getItem('isOn')) || false;
  storedDate = localStorage.getItem('lastDate');
  
  // Оновлення інтерфейсу на підставі відновлених даних
  updateUI();
});

//updateUI();

switchButton.addEventListener('click', function() {
    isOn = !isOn;

    
    storedDate = new Date().toISOString();
    localStorage.setItem('isOn', JSON.stringify(isOn));
    localStorage.setItem('lastDate', storedDate);
    updateUI();
});
  
function updateUI() {
    const lastDate = storedDate ? new Date(storedDate) : new Date(0); 
    const currentDate = storedDate ?  new Date(storedDate): new Date(0);
    const formattedDate = currentDate.toLocaleString('uk-UA');
    //зберігати стан кнопки 

    if (isOn) {
      document.body.style.backgroundColor = '#333'; 
      switchButton.textContent = 'Turn on'; 
      messageDiv.textContent = `Last turn off: ${formattedDate}`;
      messageDiv.style.display = 'block';
    } else {
      document.body.style.backgroundColor = '#f0f0f0'; 
      switchButton.textContent = 'Turn off'; 
      messageDiv.textContent = `Last turn on: ${formattedDate}`;
      messageDiv.style.display = 'block';
    }
    
}


