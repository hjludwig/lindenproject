import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default {
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "tagline",
            title: "Tagline",
            type: "string",
        },
        {
            name: "performances",
            title: "Performances",
            type: "array",
            of: [
                {
                    name: "dateTime",
                    title: "Performance date",
                    type: "datetime",
                    options: {
                        dateFormat: "MMMM Do, YYYY",
                        timeFormat: "h:mma",
                    },
                },
                // {
                //     preview: {
                //         select: {
                //             title: "dateTime",
                //         },
                //         prepare(selection) {
                //             console.log(selection);
                //             const date = new Date(selection.title);
                //             const day = date.getDate();
                //             const year = date.getFullYear();
                //             const months = [
                //                 "January",
                //                 "February",
                //                 "March",
                //                 "April",
                //                 "May",
                //                 "June",
                //                 "July",
                //                 "August",
                //                 "September",
                //                 "October",
                //                 "November",
                //                 "December",
                //             ];
                //             const monthIndex = date.getMonth();
                //             const monthName = months[monthIndex];
                //             const fullDate = `${monthName} ${day}, ${year}`;
                //             const hour =
                //                 date.getHours() > 12
                //                     ? `${date.getHours() - 12}`
                //                     : `${date.getHours()}`;
                //             const minute = date.getMinutes();
                //             const time = `${hour}:${minute}${
                //                 date.getHours() > 12 ? "pm" : "am"
                //             }`;
                //             return {
                //                 title: fullDate,
                //                 subtitle: time,
                //                 media: <FontAwesomeIcon icon={faCalendar} />,
                //             };
                //         },
                //     },
                // },
            ],
            options: {
                sortable: false,
            },
        },
        {
            name: "venue",
            title: "Venue",
            type: "string",
        },
        {
            name: "venueAddress",
            title: "Venue Address",
            description:
                "This is a place holder for the GoogleMaps input via plugin",
            type: "string",
        },
        {
            name: "ticketsLink",
            title: "Tickets Link",
            description: "Enter the URL to the tickets service.",
            type: "url",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "image",
            title: "Image",
            description: "Upload the concert poster",
            type: "image",
            hotspot: true,
        },
        {
            name: "performers",
            title: "The Performers",
            type: "array",
            of: [
                {
                    name: "name",
                    title: "Name",
                    type: "string",
                },
                {
                    name: "instrument",
                    title: "Instrument or voice type",
                    type: "string",
                },
                {
                    name: "photo",
                    title: "Headshot",
                    type: "image",
                    options: {
                        hotspot: "true",
                    },
                },
                // {
                //     name: "bio",
                //     title: "Bio",
                //     type: "array",
                //     of: [{ type: "block" }],
                // },
            ],
        },
    ],
};
