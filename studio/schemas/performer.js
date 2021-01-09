export default {
    name: "performer",
    title: "Performer",
    type: "object",
    fields: [
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
        {
            name: "links",
            title: "Links",
            type: "array",
            of: [{ type: "link" }],
        },
        {
            name: "bio",
            title: "Bio",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
