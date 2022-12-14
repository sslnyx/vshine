import "./App.css";

function App() {
  return (
    <div className="App">
      <video
        className="absolute h-full w-full object-cover top-0 left-0"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/videos/21_22_reel-m-30s.mp4" type="video/mp4" />
      </video>

      <div className="bg-black w-full h-full absolute top-0 left-0 bg-opacity-40"></div>

      <div className="relative w-full flex justify-center ">
        <div>
          <h1 className="text-4xl md:text-6xl">vshinestudio.com</h1>
          <br />
          <hr />
          <br />
          <h3 style={{ textTransform: "uppercase" }}>UNDERCONSTRUCTION</h3>
          <p>
            Please Contact Us at{" "}
            <a href="mailto:mingw85@gmail.com" className="text-white underline">
              mingw85@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
