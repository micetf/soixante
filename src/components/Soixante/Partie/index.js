import React, { useState } from "react";
import Clavier from "./Clavier.js";
import Question from "./Question.js";
import Feux from "./Feux.js";
import Resultats from "./Resultats.js";
import Rejouer from "./Rejouer.js";

const touts = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100, 105, 110, 115, 120,
];

function getTout(precedent) {
    let tout = 0;
    do {
        tout = touts[Math.floor(Math.random() * touts.length)];
    } while (tout === precedent);
    return tout;
}

function getPartiesTout(precedent) {
    const tout = getTout(precedent);
    if (tout < 60) {
        return {
            tout: 60,
            partie1: 60 - tout,
            partie2: "?",
        };
    } else {
        return {
            tout: tout,
            partie1: 60,
            partie2: "?",
        };
    }
}
const partieInitiale = getPartiesTout("intiale");
const correctionInitiale = Array.from({ length: 10 }).fill("");
function index() {
    const [correction, setCorrection] = useState(correctionInitiale);
    const [partie, setPartie] = useState(partieInitiale);
    const [parties, setParties] = useState([]);

    function handleReponse(reponse) {
        const tout = parseInt(partie.tout, 10);
        const partie1 = parseInt(partie.partie1, 10);
        const partie2 = tout - partie1;

        const indexPartie = correction.findIndex((c) => c === "");
        if (indexPartie !== -1) {
            if (partie2 === parseInt(reponse, 10)) {
                setCorrection([
                    ...correction.slice(0, indexPartie),
                    "vert",
                    ...correction.slice(indexPartie + 1),
                ]);
            } else {
                setCorrection([
                    ...correction.slice(0, indexPartie),
                    "rouge",
                    ...correction.slice(indexPartie + 1),
                ]);
            }
            setParties([
                ...parties,
                {
                    ...partie,
                    partie2,
                    reponse: parseInt(reponse, 10),
                },
            ]);
            if (indexPartie !== 9) {
                setPartie(getPartiesTout(tout));
            }
        }
    }
    function rejouer() {
        setParties([]);
        setPartie(getPartiesTout());
        setCorrection(correctionInitiale);
    }
    return (
        <div className="container fixed-bottom mb-5">
            <Feux correction={correction} />
            {parties.length !== 10 ? (
                <>
                    <Question {...partie} />
                    <Clavier handleReponse={handleReponse} />
                </>
            ) : (
                <>
                    <Resultats parties={parties} />
                    <Rejouer rejouer={rejouer} />
                </>
            )}
        </div>
    );
}

export default index;
