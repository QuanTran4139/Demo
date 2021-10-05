import React from "react";
import { GetContent } from "./AllBooks";
import { useParams } from "react-router-dom";
function ReadBookContent() {
    const { id } = useParams();

    return (
        <div>
            <p></p>
            <p>{GetContent(id)}</p>
        </div>
    )
}

export default ReadBookContent;