export default function (num) {
    const date = new Date(num);
    const day = date.getDate();
    const year = date.getFullYear();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    const fullDate = `${monthName} ${day}, ${year}`;
    return fullDate;
}
