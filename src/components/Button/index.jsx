export const Button = ({ children }) => {
  return (
    <div className="col-12">
      <button
        href="./account-personal-info.html"
        className="btn btn-sm btn-dark"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};
