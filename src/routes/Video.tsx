import useVideoById from "src/hooks/useVideoById";
import { useParams } from "react-router-dom";
import Loading from "src/components/Loading";
import VideoFull from "src/components/VideoFull";
import VideoList from "src/components/VideoList";
import useRandomFromChannel from "src/hooks/useRandomFromChannel";
import Title from "src/components/Title";
import { useMemo } from "react";

const Video = () => {
  const { id } = useParams();
  const { data, status } = useVideoById(id?.toString());
  const parsedData = data ? data[0] : null;
  const { data: randomData, status: randomStatus } = useRandomFromChannel(
    (parsedData && parsedData.channel_id) || null
  );

  const cachedMutatedData = useMemo(() => {
    if (randomStatus !== "success") return null;
    return randomData;
  }, [randomStatus]);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "success" && parsedData && (
        <>
          <VideoFull data={parsedData} />
          {cachedMutatedData && randomStatus === "success" && (
            <>
              <Title as="p" style={{ marginTop: "30px" }}>
                Check also:
              </Title>
              <VideoList data={cachedMutatedData} limit={7} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Video;
