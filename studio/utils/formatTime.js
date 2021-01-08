export default function (date) {
    const addZero = i => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    const hour =
        date.getHours() > 12 ? `${date.getHours() - 12}` : `${date.getHours()}`;
    const minute = addZero(date.getMinutes());
    const time = `${hour}:${minute}${date.getHours() > 12 ? "pm" : "am"}`;
    return time;
}
