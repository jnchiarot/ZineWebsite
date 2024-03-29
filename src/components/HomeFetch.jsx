import { useState, useEffect } from "react";
import Zines from "./Zines";
import AddZines from "./AddZines";
import AddZineButton from "./AddZineButton";
import Sidebar from "./Sidebar";

const ZinesPage = () => {
  const [showAddZine, setShowAddZine] = useState(false);
  const [zines, setZines] = useState([]);

  useEffect(() => {
    const getZines = async () => {
      try {
        const zinesFromServer = await fetchZines();
        setZines(zinesFromServer);
      } catch (error) {
        console.error("Error fetching ZINES:", error);
      }
    };

    getZines();
  }, []);

  const fetchZines = async () => {
    const res = await fetch("http://localhost:7000/zines");
    const data = await res.json();
    return data;
  };

  const addZine = async (zine) => {
    const res = await fetch("http://localhost:7000/zines", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(zine),
    });

    const data = await res.json();
    setZines([...zines, data]);
  };

  return (
    <div>
      <div>
        <Sidebar zines={zines} />
        <div className="header">
          <AddZineButton
            onAdd={() => setShowAddZine(!showAddZine)}
            showAdd={showAddZine}
          />
          {showAddZine && <AddZines onAdd={addZine} />}
          <h2>The zine place</h2>
        </div>
      </div>
      <Zines zines={zines} />
    </div>
  );
};

export default ZinesPage;
