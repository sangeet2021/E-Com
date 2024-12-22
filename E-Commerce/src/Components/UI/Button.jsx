const Button = ({ children, ...props }) => {
  return <button className="main-button" {...props}>{children}</button>;
};

export default Button;
