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
    <div>
      <button
        disabled={status === "loading" || stream?.record || !updateStream}
        onClick={() => {
          updateStream?.();
        }}
      >
        Enable Recording
      </button>
      {stream && (
        <>
          <div>Stream Name: {stream?.name}</div>
          <div>Recording?: {String(Boolean(stream.record))}</div>
        </>
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default Record;
