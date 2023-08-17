const switchButton = document.getElementById('switchButton');
const messageDiv = document.getElementById('message');
//let isOn = localStorage.getItem('isOn') === 'true';
let isOn = JSON.parse(localStorage.getItem('isOn')) || true;

updateUI();

switchButton.addEventListener('click', function() {
    isOn = !isOn;
    //localStorage.setItem('isOn', isOn.toString());
    //test comment
    localStorage.setItem('isOn', JSON.stringify(isOn));
    updateUI();
});
  
function updateUI() {
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
