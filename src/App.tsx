import { RouterCom } from "router/router";
import "./styles/normalize.css";
import "./styles/global.css";
import { Store } from "store/Store";

function App() {
  return (
    <div className="App">
      {/* 被Store包裹的组件就能使用context中的全局数据 */}
      <Store>
        <RouterCom></RouterCom>
      </Store>
    </div>
  );
}

export default App;
