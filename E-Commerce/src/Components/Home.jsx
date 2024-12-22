import { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="overlay">
        <p className="description">
          <h1>
            Unleash Your Speed, Elevate Your Run – Where Every Step is Powered
            by Innovation.
          </h1>
        </p>
        <button onClick={props.onShop}>Visit Shop</button>
      </div>
    </div>
  );
});

export default Home;
