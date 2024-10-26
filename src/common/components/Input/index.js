import React from "react";
import PropTypes from "prop-types";
import InputField, { EyeButton } from "./input.style";

const Input = ({
  label,
  value,
  onBlur,
  onFocus,
  onChange,
  inputType,
  isMaterial,
  icon,
  iconPosition,
  passwordShowHide,
  className,
  ...props
}) => {
  // toggle password visibility state (this can remain as local state)
  const [showPassword, setShowPassword] = React.useState(false);

  // toggle function for password show/hide
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  // get input focus class
  const getInputFocusClass = () => {
    return value !== "" ? "is-focus" : "";
  };

  // init variable
  let inputElement, htmlFor;

  // Add all classs to an array
  const addAllClasses = ["reusecore__input"];

  // Add is-material class
  if (isMaterial) {
    addAllClasses.push("is-material");
  }

  // Add icon position class if input element has icon
  if (icon && iconPosition) {
    addAllClasses.push(`icon-${iconPosition}`);
  }

  // Add new class
  if (className) {
    addAllClasses.push(className);
  }

  // if label is not empty
  if (label) {
    htmlFor = label.replace(/\s+/g, "_").toLowerCase();
  }

  // Label position
  const LabelPosition = isMaterial === true ? "bottom" : "top";

  // Label field
  const LabelField = label && <label htmlFor={htmlFor}>{label}</label>;

  // Input type check
  switch (inputType) {
    case "textarea":
      inputElement = (
        <textarea
          {...props}
          id={htmlFor}
          name={htmlFor}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      );
      break;

    case "password":
      inputElement = (
        <div className="field-wrapper">
          <input
            {...props}
            id={htmlFor}
            name={htmlFor}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {passwordShowHide && (
            <EyeButton
              onClick={handleToggle}
              className={showPassword ? "eye-closed" : "eye"}
            >
              <span />
            </EyeButton>
          )}
        </div>
      );
      break;

    default:
      inputElement = (
        <div className="field-wrapper">
          <input
            {...props}
            id={htmlFor}
            name={htmlFor}
            type={inputType}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {icon && <span className="input-icon">{icon}</span>}
        </div>
      );
  }

  return (
    <InputField
      className={`${addAllClasses.join(" ")} ${getInputFocusClass()}`}
    >
      {LabelPosition === "top" && LabelField}
      {inputElement}
      {isMaterial && <span className="highlight" />}
      {LabelPosition === "bottom" && LabelField}
    </InputField>
  );
};

/** Input prop type checking. */
Input.propTypes = {
  /** className of the Input component. */
  className: PropTypes.string,

  /** Set input label value. */
  label: PropTypes.string,

  /** The input value, required for a controlled component. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Make default input into material style input. */
  isMaterial: PropTypes.bool,

  /** Password show/hide icon button prop [*only for password field]. */
  passwordShowHide: PropTypes.bool,

  /** Set input type of the input element. Default type is text. */
  inputType: PropTypes.oneOf([
    "text",
    "email",
    "password",
    "number",
    "textarea",
  ]),

  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon: PropTypes.object,

  /** Set input field icon position. Default position is 'left'. */
  iconPosition: PropTypes.oneOf(["left", "right"]),

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,
};

/** Input default type. */
Input.defaultProps = {
  inputType: "text",
  isMaterial: false,
  iconPosition: "left",
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {},
};

export default Input;
