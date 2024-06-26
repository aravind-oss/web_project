setInterval(function() {
    var batteryLevel = Math.random(); // Generate random battery level (0 to 1)
    updateBatteryLevel(batteryLevel);
}, 3000); // Update every 3 seconds

function updateBatteryLevel(level) {
    var batteryLevelElement = document.getElementById('battery-level');
    var heightPercentage = level * 100;
    batteryLevelElement.style.transform = 'scaleY(' + level + ')';
    batteryLevelElement.style.backgroundColor = getBatteryColor(level);
}

function getBatteryColor(level) {
    // Adjust color based on battery level
    if (level > 0.7) {
        return '#4CAF50'; // Green
    } else if (level > 0.3) {
        return '#FFC107'; // Yellow
    } else {
        return '#F44336'; // Red
    }
}
const buy=document.getElementById(buynow);
