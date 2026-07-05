import "../styles/Components.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      {message}
    </div>
  );
}

export default ErrorMessage;