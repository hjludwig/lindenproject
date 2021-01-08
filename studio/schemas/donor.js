import { FaDollarSign } from "react-icons/fa";
import React from "react";
import formatDate from "../utils/formatDate";

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
            of: [
                {
                    title: "Donation",
                    type: "document",
                    fields: [
                        {
                            name: "amount",
                            title: "Amount",
                            type: "number",
                            description: "In dollars",
                        },
                        {
                            name: "date",
                            title: "Date",
                            description:
                                "Enter the date the donation was recieved",
                            type: "date",
                        },
                    ],
                    preview: {
                        select: {
                            title: "amount",
                            subtitle: "date",
                        },
                        prepare({ title, subtitle }) {
                            const dollars = `$${title}.00`;
                            const date = formatDate(subtitle);
                            return {
                                title: dollars,
                                subtitle: date,
                                media: <FaDollarSign />,
                            };
                        },
                    },
                },
            ],
            options: { sortable: false },
        },
    ],
};
