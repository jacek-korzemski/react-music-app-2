import Title from "src/components/atoms/Title";
import useChannelById from "src/hooks/useChannelById";
import { useParams } from "react-router-dom";
import Loading from "src/components/atoms/Loading";
import VideoList from "src/components/organisms/VideoList";

const Channel = () => {
  const { id } = useParams();
  const { data, status } = useChannelById(16);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "success" && (
        <VideoList data={data} title={data[0].channel_title} noBait />
      )}
    </>
  );
};

export default Channel;
