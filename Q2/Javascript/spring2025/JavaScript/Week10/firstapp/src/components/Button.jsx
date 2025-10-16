const Button = ({ text, color, onClick }) => {
  // const onClick = () => {
  //   console.log("Click!");
  // };
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};
export default Button;
