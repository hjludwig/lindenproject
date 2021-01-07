export default {
    name: "person",
    title: "Person",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "bio",
            title: "Biography",
            description: "Enter a short, one paragraph bio",
            type: "text",
        },
        {
            name: "role",
            title: "Role",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Founder", value: "founder" },
                    { title: "Board Member", value: "boardMember" },
                ],
                layout: "tags",
            },
        },
        {
            name: "title",
            title: "Title",
            description: "Eg: Artistic director, President",
            type: "string",
        },
        {
            name: "headshot",
            title: "headshot",
            type: "image",
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "title",
            media: "headshot",
        },
    },
};
