import { useState } from "react";
import lodash from "lodash";
import axios from "axios"
export default function SSE() {
  const [msgs, setMsgs] = useState<string[]>([]);

  return (
    <>
      <button onClick={() => {
        const evtSource = new EventSource("http://localhost:8080/sse");
        evtSource.addEventListener("message", (event) => {
          console.log("eventevent", event);
          setMsgs(datas => {
            const datas_ = lodash.cloneDeep(datas)
            const newData = event.data;
            datas_.push(newData);
            return datas_;
          });
        });
      }}>
        Listen to a stream
      </button>

      <div>
        {msgs.map(msg => {
          if (msg) {
            return (
              <div>
                {msg}
              </div>
            )
          } else {
            return null;
          }
        })}
      </div>
    </>
  )
}