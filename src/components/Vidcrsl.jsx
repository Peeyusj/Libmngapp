import "../App.css";
import "../styles/vidcrsl.css";
import Videolist from "./Videolist";

function Vidcrsl() {
  return (
    <div className="vidcrsl">
      <div className="list1">
        <div className="toprated" style={{height:"100%"}}>
        <Videolist categ="toprated" />

        </div>
      </div>
    </div>
  );
}

export default Vidcrsl;
