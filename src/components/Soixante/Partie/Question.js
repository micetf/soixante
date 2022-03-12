import React from "react";

function Question({ tout, partie1, partie2 }) {
    return (
        <div className="text-center question">
            {tout} = {partie1} + {partie2}
        </div>
    );
}

export default Question;
