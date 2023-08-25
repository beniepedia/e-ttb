export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
    handleClick,
}) {
    return (
        <button
            type={type}
            className={`btn shadow-lg px-6 rounded ${className}`}
            disabled={processing}
            onClick={handleClick}
        >
            {processing && <span className="loading loading-spinner"></span>}
            {children}
        </button>
    );
}
