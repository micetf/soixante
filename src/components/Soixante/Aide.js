import modal from "bootstrap/js/dist/modal";
import { useEffect, useRef } from "react";

function Aide({ visibiliteAide, fermerAide }) {
    const aideModal = useRef(null);

    useEffect(() => {
        const modalHandler = new modal(aideModal.current);
        if (visibiliteAide) modalHandler.show();
    }, [visibiliteAide]);

    function handleClick(e) {
        e.preventDefault();
        fermerAide();
    }
    return (
        <div
            ref={aideModal}
            className="modal fade"
            data-bs-backdrop="static"
            tabIndex="-1"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="aide">
                            Autour de 60
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            onClick={handleClick}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p className="fw-bold text-decoration-underline">
                            Objectifs :
                        </p>
                        <ul>
                            <li>
                                Entretenir la capacité à calculer autour du
                                nombre 60 (secondes, minutes ?).
                            </li>
                        </ul>
                        <p className="fw-bold text-decoration-underline">
                            But du jeu :
                        </p>
                        <ul>
                            <li>Trouver 10 compléments à 60.</li>
                        </ul>
                        <p className="fw-bold text-decoration-underline">
                            Déroulement :
                        </p>
                        <ul>
                            <li>
                                Cliquer sur le multiple de 5 qui correspond à
                                l'égalité affichée dans le cadre noir.
                            </li>
                            <li>
                                Si la réponse est juste, le feu passe au vert.
                                Sinon le feu passe au rouge.
                            </li>
                            <li>
                                Dans tous les cas une nouvelle égalité est
                                proposée.
                            </li>
                            <li>
                                Après 10 calculs, la correction s'affiche et il
                                est possible de recommencer une série.
                            </li>
                        </ul>
                    </div>
                    <p></p>{" "}
                </div>
            </div>
        </div>
    );
}

export default Aide;
