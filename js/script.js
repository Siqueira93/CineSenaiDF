function mostrarInformacoes() {
    document.getElementById('informacoes').style.display = 'block';
}

function fecharInformacoes() {
    document.getElementById('informacoes').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", () => {
    const seatsContainer = document.querySelector(".seats");
    const totalSeats = 50;

    for (let i = 0; i < totalSeats; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.addEventListener("click", () => {
            seat.classList.toggle("selected");
        });
        seatsContainer.appendChild(seat);
    }
});