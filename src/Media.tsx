import Image from "./Image";

type MediaProps = {
  images: string[];
};

const Media = ({ images }: MediaProps) => {
  return (
    <>
      <div className="pictureGrid">
        {images.map((image, index) => (
          <Image key={index} source={`./assets/${image}`} />
        ))}
      </div>
    </>
  );
};

export default Media;
