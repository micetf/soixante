import React from "react";

function Reponse({ tout, partie1, partie2, reponse }) {
    const correction =
        partie2 === reponse
            ? { alert: " list-group-item-success", reponse: null }
            : {
                  alert: " list-group-item-warning",
                  reponse: (
                      <span className="text-danger text-decoration-line-through">
                          ({reponse})
                      </span>
                  ),
              };

    return (
        <li className={"list-group-item" + correction.alert}>
            {tout} = {partie1} + {partie2} {correction.reponse}
        </li>
    );
}
function Resultats({ parties }) {
    return (
        <div className="correction row">
            <div className="col">
                <ul className="list-group">
                    {parties.slice(0, 5).map((partie, index) => (
                        <Reponse key={index} {...partie} />
                    ))}
                </ul>
            </div>
            <div className="col">
                <ul className="list-group">
                    {parties.slice(5).map((partie, index) => (
                        <Reponse key={index} {...partie} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Resultats;
