export const Field = ({ Label, ...props }) => {
  return(
    <div className="form-group">
      <label className="sr-only" htmlFor="loginEmail">
        {Label}
      </label>

      <input {...props} className="form-control form-control-sm" />
    </div>
  );
};
