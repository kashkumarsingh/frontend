import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
const ThemeSwitcher = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="themeSwitch"
        label={isDarkMode ? "Dark Mode" : "Light Mode"}
        checked={isDarkMode}
        onChange={handleToggleTheme}
      />
    </Form>
  );
};
export default ThemeSwitcher;
