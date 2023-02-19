import { Player, useCreateStream } from "@livepeer/react";

import { useEffect, useMemo, useState } from "react";
import { BiCopy } from "react-icons/bi";
import Record from "./Record";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

// const stream = {
//   lastSeen: 0,
//   isActive: false,
//   record: false,
//   suspended: false,
//   sourceSegments: 0,
//   transcodedSegments: 0,
//   sourceSegmentsDuration: 0,
//   transcodedSegmentsDuration: 0,
//   sourceBytes: 0,
//   transcodedBytes: 0,
//   profiles: [
//     {
//       name: "720p",
//       bitrate: 2000000,
//       fps: 30,
//       width: 1280,
//       height: 720,
//     },
//     {
//       name: "480p",
//       bitrate: 1000000,
//       fps: 30,
//       width: 854,
//       height: 480,
//     },
//     {
//       name: "360p",
//       bitrate: 500000,
//       fps: 30,
//       width: 640,
//       height: 360,
//     },
//   ],
//   name: "New",
//   kind: "stream",
//   userId: "987bb578-7f13-4666-bcd3-bb0d089090cb",
//   renditions: {},
//   id: "c7a7638e-2ba2-48ae-9e4b-11e559feefb7",
//   createdAt: 1676640073933,
//   streamKey: "c7a7-bdrv-ybmp-6wjk",
//   playbackId: "c7a7k3uxbtmhl1lz",
//   createdByTokenName: "ethforall",
//   multistream: {
//     targets: [],
//   },
//   rtmpIngestUrl: "rtmp://rtmp.livepeer.com/live/c7a7-bdrv-ybmp-6wjk",
//   playbackUrl: "https://livepeercdn.com/hls/c7a7k3uxbtmhl1lz/index.m3u8",
// };
const Stream = () => {
  const [streamName, setStreamName] = useState("");
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);
  useEffect(() => {
    function sendMessage() {
      socket.emit("sendd", {
        streamName: stream?.name,
        playbackId: stream?.playbackId,
      });
    }
    if (stream !== undefined) sendMessage();
  }, [stream]);
  console.log(stream);
  const isLoading = useMemo(() => status === "loading", [status]);

  return (
    <div className="flex flex-col">
      {stream?.playbackId ? (
        <div className="flex justify-center items-center p-4">
          <div className="border-t-4 max-w-md border-indigo-600 overflow-hidden rounded shadow-lg mr-4">
            <h3 className="text-xl text-center justify-center flex mt-8 mb-8 cursor-pointer">
              <span>Stream Name:</span>
              <span
                className="flex hover:text-gray-400 ml-3"
                onClick={() => {
                  navigator.clipboard.writeText(stream.name);
                }}
              >
                {stream.name}
                <BiCopy className="my-auto ml-2" />
              </span>
            </h3>
            <div className="px-4 flex items-center mb-4 justify-evenly">
              <span>RTMP URL</span>
              <span
                className="flex hover:text-gray-400 ml-3 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "rtmp://rtmp.livepeer.com/live/"
                  );
                }}
              >
                {"rtmp://rtmp.livepeer.com/live/"}
                <BiCopy className="my-auto ml-2" />
              </span>
            </div>
            <div className="px-4 flex items-center mb-4 justify-evenly">
              <span>Stream Key</span>
              <span
                className="flex cursor-pointer hover:text-gray-400 ml-3"
                onClick={() => {
                  navigator.clipboard.writeText(stream.streamKey);
                }}
              >
                {stream.streamKey}
                <BiCopy className="my-auto ml-2" />
              </span>
            </div>
          </div>
          <div className=" flex justify-center flex-1">
            <div className="w-full h-[76%] flex justify-center">
              <Player
                title={stream?.name}
                playbackId={stream?.playbackId}
                autoPlay
                muted
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mt-3 mx-auto border-t-4 border-indigo-600 overflow-hidden rounded shadow-lg">
          <h3 className="text-xl text-center mt-8 mb-8">Stream Details</h3>
          <div className="px-4 mb-4">
            <input
              id="name"
              type="text"
              onChange={(e) => setStreamName(e.target.value)}
              className="border border-gray rounded w-full p-3 text-center"
              placeholder="Stream Name"
              autoComplete="off"
            />
          </div>

          <div className="px-4 mb-4">
            <button
              onClick={() => {
                createStream?.();
              }}
              disabled={isLoading || !createStream}
              className="border border-gray bg-indigo-600 text-white rounded w-full p-3 text-center"
            >
              Create Stream
            </button>
          </div>
        </div>
      )}
      {/* <div>{stream ? <Record streamId={stream?.id} /> : <></>}</div> */}
    </div>
  );
};
export default Stream;
