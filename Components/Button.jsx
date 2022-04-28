import handleSubmit from "../src/Script";

function Button() {
  return (
    <input
      type="button"
      value="Search"
      className="btn"
      onClick={handleSubmit}
    />
  );
}

export default Button;
