import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import performer from "./performer";
import performance from "./performance";

// TODO: Add performance dates array -- add in separate schema and import??

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
            name: "performances",
            title: "Performances",
            type: "array",
            of: [{ type: "performance" }],
            options: {
                sortable: false,
            },
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
            title: "Performers",
            type: "array",
            of: [{ type: "performer" }],
        },
    ],
};
