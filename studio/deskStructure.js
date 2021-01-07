import S from "@sanity/desk-tool/structure-builder";
// import React from "react";
import {
    faCalendarAlt,
    faCalendar,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Our Organization")
                .child(
                    S.document()
                        .schemaType("organization")
                        .documentId("organization")
                ),
            S.divider(),
            S.listItem()
                .title("Events")
                // .icon("faCalendar")
                .schemaType("event")
                .child(S.documentTypeList("event").title("Events")),
            S.listItem()
                .title("Our Team")
                // .icon("faUser")
                .schemaType("person")
                .child(S.documentTypeList("person").title("Our Team")),
        ]);
