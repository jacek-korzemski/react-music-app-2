import Loading from "src/components/atoms/Loading";
import VideoList from "src/components/organisms/VideoList";
import useNewVideos from "src/hooks/useNewVideos";

const Home = () => {
  const { data, status } = useNewVideos();

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "success" && <VideoList data={data} title={"Newest"} />}
    </>
  );
};

export default Home;
