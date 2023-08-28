const switchButton = document.getElementById('switchButton');
const messageDiv = document.getElementById('message');
let isOn = JSON.parse(localStorage.getItem('isOn')) || true;
let storedDate = localStorage.getItem('lastDate');
updateUI();

switchButton.addEventListener('click', function() {
    isOn = !isOn;

    if (isOn) {
      storedDate = new Date().toISOString();
    } else {
      storedDate = null;
    }
    localStorage.setItem('isOn', JSON.stringify(isOn));
    localStorage.setItem('lastDate', storedDate);
    updateUI();
});
  
function updateUI() {
    const lastDate = storedDate ? new Date(storedDate) : new Date(0); 
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('uk-UA');

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

