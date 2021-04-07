function Movie (props){
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x500?text=${title}`}
                    /> :
                    <img className="activator" src={poster} />
            }
        </div>
        <div className="card-content">
            <p>{title}</p>
            <p>{year} <span className="right">{type}</span></p>
        </div>
    </div>
};

export {Movie};