import Button from "./Button";

const History = ({ country, city, population }) => {
  //   let x = props.country;
  //   let y = props.city;

  //   let { country, city } = props;

  const onClickH = () => {
    console.log("Click of History");
  };

  return (
    <>
      <h3>History - {country}</h3>
      <p>
        This is some history of <span>{city}</span> - The population of city is
        {population}
      </p>
      {/* <button>Play</button>
      <button>Stop</button> */}
      <Button text="Play" color="green" onClick={onClickH} />
      <Button text="Stop" color="red" onClick={onClickH} />
      <Button text="Pause" color="gray" onClick={onClickH} />
    </>
  );
};

// const headingStyle = {
//   color: "white",
//   backgroundColor: "black",
//   padding: "10px",
//   border: "3px solid red",
// };
export default History;
