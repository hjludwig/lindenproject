// URGENT: Google Maps API keys exposed in config file -- added config to gitignore for now

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
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
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
            description: "Enter the venue address",
            type: "geopoint",
        },
        {
            // Possible feature: conditional display of this (and other?) fields based on a "Online event" Boolean field.
            //  Examples: https://github.com/sanity-io/sanity/issues/1224     https://github.com/bjornwang/sanity-conditional-fields
            name: "youTubeURL",
            title: "YouTube URL",
            description: "Enter the YouTube link if applicable",
            type: "url",
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
            name: "program",
            title: "Program",
            description: "Upload the concert program",
            type: "file",
        },
        {
            name: "image",
            title: "Image",
            description:
                "A large image for the concert gallery and event page banner",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "poster",
            title: "Concert Poster",
            description: "Upload the concert poster",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "performers",
            title: "Performers",
            type: "array",
            of: [{ type: "performer" }],
        },
    ],
};
