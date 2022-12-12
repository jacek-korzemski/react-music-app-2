import useVideoById from "src/hooks/useVideoById";
import { useParams } from "react-router-dom";
import Loading from "src/components/Loading";
import VideoFull from "src/components/VideoFull";
import VideoList from "src/components/VideoList";
import useRandomFromChannel from "src/hooks/useRandomFromChannel";
import Title from "src/components/Title";

const Video = () => {
  const { id } = useParams();
  const { data, status } = useVideoById(id?.toString());
  const parsedData = data ? data[0] : null;
  const { data: randomData, status: randomStatus } = useRandomFromChannel(
    (parsedData && parsedData.channel_id) || null
  );

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "success" && parsedData && (
        <>
          <VideoFull data={parsedData} />
          {randomData && randomStatus === "success" && (
            <>
              <Title as="p" style={{ marginTop: "30px" }}>
                Check also:
              </Title>
              <VideoList data={randomData} limit={7} />
            </>
          )}
        </>
      )}
    </>
  );

  return <Loading />;
};

export default Video;
