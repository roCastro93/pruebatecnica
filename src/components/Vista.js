

const Vista = ({ resultado, precio }) => {


    return (
        //cards para mostrar la vista
        <div className="container">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-8">
                        <img src={resultado.fullImage} alt="..." className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h4>APPLE</h4>
                            <h5 className="card-title">{resultado.name}</h5>
                            <p>{resultado.partNumber}</p>
                            <p className="card-text">{resultado.shortDescription}</p>
                            <p className="card-text">{precio.formattedCardPrice}<span>  -11%</span> </p>
                            <p className="card-text"><strong>Internet: </strong>{precio.formattedOfferPrice}</p>
                            <p className="card-text">Normal: <strike>{precio.formattedListPrice}</strike></p>
                            <div className="row justify-content-between" >
                                <p>Con tarjeta Ripley acumulas <strong>{precio.ripleyPuntos}</strong> RipleyPuntos GO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Vista;