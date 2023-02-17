import { useStream, useUpdateStream } from "@livepeer/react";

function Record({ streamId }) {
  const { data: stream } = useStream({
    streamId,
    refetchInterval: 10000,
  });
  const {
    mutate: updateStream,
    status,
    error,
  } = useUpdateStream({
    streamId,
    record: true,
    playbackPolicy: {
      type: "public",
    },
  });
//   console.log("Stream: ", updateStream);
  return (
    <div className="flex space-x-1 justify-evenly">
      <button
        disabled={status === "loading" || stream?.record || !updateStream}
        onClick={() => {
          updateStream?.();
        }}
      >
        Enable Recording
      </button>
      {stream && (
        <div>
          <div className="">Stream Name: {stream?.name}</div>
          {/* <div>Recording?: {String(Boolean(stream.record))}</div> */}
        </div>
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default Record;
