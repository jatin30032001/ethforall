import { Player, useCreateStream } from "@livepeer/react";

import { useMemo, useState } from "react";
import Record from "./Record";

const Stream = () => {
  const [streamName, setStreamName] = useState("");
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);
  console.log(stream);
  const isLoading = useMemo(() => status === "loading", [status]);

  return (
    <div>
      <input
        type="text"
        placeholder="Stream name"
        onChange={(e) => setStreamName(e.target.value)}
      />

      {stream?.playbackId && (
        <div className="w-[400px] h-[200px]">
          <Player
            title={stream?.name}
            playbackId={stream?.playbackId}
            autoPlay
            muted
          />
        </div>
      )}

      <div>
        {!stream && (
          <button
            onClick={() => {
              createStream?.();
            }}
            disabled={isLoading || !createStream}
          >
            Create Stream
          </button>
        )}
      </div>
      <div>{stream ? <Record streamId={stream?.id} /> : <></>}</div>
    </div>
  );
};
export default Stream;
