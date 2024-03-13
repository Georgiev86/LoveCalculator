import { IPhoto } from "~/interfaces/photo";

interface IShowPhotoProps {
  photo: IPhoto;
}

const ShowPhoto = ({photo}: IShowPhotoProps) => {
  return <img src={photo.src} alt={photo.alt} />;
};

export default ShowPhoto;