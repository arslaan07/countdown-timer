document.addEventListener("DOMContentLoaded", function() {
const targetDate = new Date('2025-01-01T00:00:00');
function updateCountDown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000*60*60*24));
    const hours = Math.floor((timeDifference % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((timeDifference % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((timeDifference % (1000*60)) / (1000));
    let cd = document.getElementById('countdown');
    cd.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    setTimeout(updateCountDown, 1000);

}


document.getElementById('countdown-btn').addEventListener("click", function() {
    this.remove();
    updateCountDown();
});

});