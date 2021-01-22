export default {
    name: "organization",
    title: "Our Organization",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Our Name",
            type: "string",
        },
        {
            name: "logo",
            title: "Logo",
            description: "Any valid image file. SVG preferred.",
            type: "image",
        },
        {
            name: "logoInverse",
            title: "Inverted Logo",
            description:
                "A version of the logo suitable for a dark background. Any valid image file. SVG preferred.",
            type: "image",
        },
        {
            name: "tagline",
            title: "Tagline",
            type: "string",
        },
        {
            name: "missionStatement",
            title: "Our Mission Statement",
            description: "What we do",
            type: "string",
        },
        {
            name: "descriptionShort",
            title: "Short Description",
            description: "A one paragraph description of the organization",
            type: "text",
        },
        {
            name: "descriptionLong",
            title: "Long Description",
            description:
                "A longer description of who we are and what we're about",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
