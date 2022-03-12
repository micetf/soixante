import React from "react";

function Clavier({ handleReponse }) {
    function handleClick(e) {
        e.preventDefault();
        handleReponse(e.target.dataset.reponse);
    }
    return (
        <div className="d-flex justify-content-around">
            {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map(
                (reponse) => (
                    <div
                        key={reponse}
                        data-reponse={reponse}
                        className="touche"
                        onClick={handleClick}
                    >
                        {reponse}
                    </div>
                )
            )}
        </div>
    );
}

export default Clavier;
