import React from "react";
import { FaCalendar } from "react-icons/fa";
import formatDate from "../../utils/formatDate";
import formatTime from "../../utils/formatTime";

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
            const date = new Date(selection.title);
            const fullDate = formatDate(date);
            const time = formatTime(date);

            return {
                title: fullDate,
                subtitle: time,
                media: <FaCalendar />,
            };
        },
    },
};
