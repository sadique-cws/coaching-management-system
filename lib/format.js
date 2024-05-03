export const formatPrice = (price) => {
    return new Intl.NumberFormat("en-Us", {
        style: "currency",
        currency: "INR",
    }).format(price)
}

export const formatDuration = (duration) => {
    return `${duration} ${duration == 1 ? "Week": "Weeks"}`;
}

export const formatSeat = (seat) => {
    return `${seat} ${seat == 1? "Seat" : "Seats"}`;
}