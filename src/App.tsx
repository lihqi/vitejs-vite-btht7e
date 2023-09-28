import { Leafer, Text, Debug } from "leafer-ui";
import { useEffect, useRef } from "react";
import RectsCase from "./rectsDemo";

const App = () => {
  const instance = useRef();
  useEffect(() => {
    if (!instance.current) {
      const startTime = Date.now();
      const app = new Leafer({ view: window });
      instance.current = app;
      Debug.enable = true;
      Debug.filter = "RunTime";
      // new RectsCase(app, 1); // 100万个
      console.log(`创建100万个矩形用时：`, Date.now() - startTime, "毫秒");
      const text = new Text({
        fill: "rgb(50,205,121)",
        text: "Welcome to LeaferJS",
        stroke: {
          type: "linear",
          stops: [
            { offset: 0, color: "#FF4B4B" },
            { offset: 1, color: "#FEB027" },
          ],
        },
      });
      app.add(text);
    }
  }, []);

  return <div>8888</div>;
};

export default App;
