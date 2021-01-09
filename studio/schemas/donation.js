import { FaDollarSign } from "react-icons/fa";
import formatDate from "../utils/formatDate";
import React from "react";

export default {
    name: "donation",
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
            description: "Enter the date the donation was recieved",
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
};
