export default {
    name: "social",
    title: "Social Media Link",
    type: "object",
    fields: [
        {
            name: "url",
            title: "The URL",
            type: "url",
        },
        {
            name: "type",
            title: "Type",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Facebook", value: "facebook" },
                    { title: "Twitter", value: "twitter" },
                    { title: "Instagram", value: "instagram" },
                ],
                layout: "grid",
            },
        },
    ],
};
