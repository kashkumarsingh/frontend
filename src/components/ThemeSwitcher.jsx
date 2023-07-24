const ThemeSwitcher = () => {
  return (
    <>
      <div className="dark-mode-toggle text-center w-100">
        <hr className="mb-4" />
        <h4 className="toggle-name mb-3 ">
          <i className="fas fa-adjust me-1"></i>Dark Mode
        </h4>

        <input className="toggle" id="darkmode" type="checkbox" />
        <label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>
      </div>
      {/*dark-mode-toggle*/}
    </>
  );
};
export default ThemeSwitcher;
