type ImageProps = {
  source: string;
};

const Image = ({ source }: ImageProps) => {
  return (
    <>
      <div>
        <img className="image" src={source} alt="" />
      </div>
    </>
  );
};

export default Image;
