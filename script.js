
document.addEventListener('DOMContentLoaded', function() {
    // Air Conditioner Toggle
    const acToggle = document.getElementById('acToggle');
    const acTemperature = document.getElementById('acTemperature');
    const acTempDisplay = document.getElementById('acTempDisplay');
    
    acToggle.addEventListener('click', function() {
        this.classList.toggle('on');
        this.textContent = this.classList.contains('on') ? 'ON' : 'OFF';
    });
    
    acTemperature.addEventListener('input', function() {
        acTempDisplay.textContent = `${this.value}°C`;
    });
    
    // Fan Toggle
    const fanToggle = document.getElementById('fanToggle');
    const fanSpeed = document.getElementById('fanSpeed');
    const fanSpeedDisplay = document.getElementById('fanSpeedDisplay');
    
    fanToggle.addEventListener('click', function() {
        this.classList.toggle('on');
        this.textContent = this.classList.contains('on') ? 'ON' : 'OFF';
    });
    
    fanSpeed.addEventListener('input', function() {
        fanSpeedDisplay.textContent = this.value;
    });

    // Lights Toggle
    const lightToggle = document.getElementById('lightToggle');
    const lightBrightness = document.getElementById('lightBrightness');
    const lightBrightnessDisplay = document.getElementById('lightBrightnessDisplay');
    const lightColor = document.getElementById('lightColor');
    
    lightToggle.addEventListener('click', function() {
        this.classList.toggle('on');
        this.textContent = this.classList.contains('on') ? 'ON' : 'OFF';
    });
    
    lightBrightness.addEventListener('input', function() {
        lightBrightnessDisplay.textContent = `${this.value}%`;
    });

    lightColor.addEventListener('input', function() {
        document.body.style.backgroundColor = this.value;
    });
});
