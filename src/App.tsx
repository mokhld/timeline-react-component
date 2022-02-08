import { useEffect } from "react";
import SingleTimeline from "./components/SingleTimeline";
import { useService } from "./service/useService";
import { singleTimeline } from "./types";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  // using custom hook
  const { getData, data } = useService();

  // interval to add items
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="timeline">
      {data.map((item: singleTimeline, i: number) => {
        return <SingleTimeline item={item} itemId={item.id} index={i} />;
      })}
    </div>
  );
};

export default App;
