interface IShowImageProps {
  src: string;
  alt?: string;
}

const ShowImage = ({src, alt}: IShowImageProps) => {
  return <img src={src} alt={alt} />;
};

export default ShowImage;