import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default {
    name: "performance",
    title: "Performance Date",
    type: "object",
    fields: [
        {
            name: "dateTime",
            title: "Day and Time",
            type: "datetime",
            options: {
                dateFormat: "MMMM Do, YYYY",
                timeFormat: "h:mma",
            },
        },
    ],

    preview: {
        select: {
            title: "dateTime",
        },
        prepare(selection) {
            console.log(selection);
            const addZero = i => {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            };
            const date = new Date(selection.title);
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
            const hour =
                date.getHours() > 12
                    ? `${date.getHours() - 12}`
                    : `${date.getHours()}`;
            const minute = addZero(date.getMinutes());
            const time = `${hour}:${minute}${
                date.getHours() > 12 ? "pm" : "am"
            }`;
            return {
                title: fullDate,
                subtitle: time,
                media: <FontAwesomeIcon icon={faCalendarAlt} />,
            };
        },
    },
};
