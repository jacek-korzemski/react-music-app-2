import useChannelById from "src/hooks/useChannelById";
import { useParams } from "react-router-dom";
import Loading from "src/components/Loading";
import VideoList from "src/components/VideoList";

const Channel = () => {
  const { id } = useParams();
  const { data, status } = useChannelById(id);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "success" && (
        <VideoList
          data={data}
          title={data[0].channel_title}
          noBait
          pagination
        />
      )}
    </>
  );
};

export default Channel;
