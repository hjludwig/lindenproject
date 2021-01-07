import S from "@sanity/desk-tool/structure-builder";
import { FaUser, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Our Organization")
                .icon(FaInfoCircle)
                .child(
                    S.document()
                        .schemaType("organization")
                        .documentId("organization")
                ),
            S.divider(),
            S.listItem()
                .title("Events")
                .icon(FaCalendarAlt)
                .schemaType("event")
                .child(S.documentTypeList("event").title("Events")),
            S.listItem()
                .title("Our Team")
                .icon(FaUser)
                .schemaType("person")
                .child(S.documentTypeList("person").title("Our Team")),
        ]);
