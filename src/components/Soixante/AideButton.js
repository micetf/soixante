import Svg, { AIDE } from "../Svg/index.js";

function AideButton({ ouvrirAide }) {
    function handleClick(e) {
        e.preventDefault();
        ouvrirAide();
    }

    return (
        <div className="d-flex justify-content-between">
            <div className="alert alert-info">
                Clique sur le multiple de 5 qui permet de compléter l'égalité
                affichée dans le cadre noir.
            </div>
            <div className="my-auto">
                <button
                    className="btn btn-primary"
                    onClick={handleClick}
                    title="Comment utiliser cette application web ?"
                >
                    <Svg src={AIDE} />
                </button>
            </div>
        </div>
    );
}

export default AideButton;
