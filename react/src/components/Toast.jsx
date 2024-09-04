export default function Toast({ message }) {
    return (
        <div
            className="toast align-items-center show position-fixed z-3 text-danger"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div className="d-flex">
                <div className="toast-body">{message}</div>
                <button
                    type="button"
                    className="btn-close me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button>
            </div>
        </div>
    );
}
