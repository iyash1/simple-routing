const Loader = () => {
    return (
        <div className="fs-1 d-flex justify-content-center m-5">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;