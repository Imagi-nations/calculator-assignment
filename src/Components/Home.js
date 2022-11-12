
import "./Home.css"
function Home ({ value }){
  return (
    <div className="home" mode="single" max={90}>
      {value}
   </div>
  );
};

export default Home;
