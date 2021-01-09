export default {
    name: "donor",
    title: "Donor",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "donorType",
            title: "Donor Type",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Individual", value: "individual" },
                    { title: "Business", value: "business" },
                    { title: "Granting Agency", value: "grantingAgency" },
                ],
                layout: "tags",
            },
        },
        {
            name: "anonymous",
            title: "Anonymous?",
            description:
                "Toggle on if the donor would like to remain anonymous",
            type: "boolean",
            // options: { layout: "checkbox" },
        },
        {
            name: "logo",
            title: "Logo",
            description: "Upload a logo file, if applicable.",
            type: "image",
        },
        {
            name: "donations",
            title: "Donations",
            type: "array",
            of: [{ type: "donation" }],
            options: { sortable: false },
        },
    ],
};
