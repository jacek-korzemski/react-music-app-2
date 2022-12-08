import { useState } from "react";
import styled from "styled-components";
import Title from "src/components/atoms/Title";
import { Video } from "src/types/Video";
import Loading from "src/components/atoms/Loading";

const IFrame = styled.iframe`
  width: 100%;
  height: 360px;
  border: none;
  margin: 0;
  padding: 0;
  @media (min-width: 776px) {
    height: 480px;
  }
  @media (min-width: 1333px) {
    height: 640px;
  }
`;

const IFrameWrapper = styled.div`
  position: relative;
  margin-bottom: 25px;
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  iframe {
    position: relative;
    z-index: 10;
  }
`;

const VideoFull = ({ data }: { data: Video }) => {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Title>{data.title}</Title>
      <IFrameWrapper>
        <IFrame
          src={`https://www.youtube.com/embed/${data.url}`}
          title={data.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => {
            setReady(true);
          }}
        >
          {!ready && (
            <div className="loading">
              <Loading />
            </div>
          )}
        </IFrame>
      </IFrameWrapper>
    </>
  );
};

export default VideoFull;
