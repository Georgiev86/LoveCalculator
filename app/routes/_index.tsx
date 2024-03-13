import type { MetaFunction } from "@remix-run/node";
import ShowImage from "../components/ShowImage";
import { IPhoto } from "~/interfaces/photo";
import ShowPhoto from "~/components/ShowPhoto";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const altText = 'Wood block';

  const thePhoto: IPhoto = {
    src: "https://m.media-amazon.com/images/I/81ajN2oWRGL._AC_UF894,1000_QL80_.jpg",
    alt: "Wood block",
  }


  return (
    <>
      <ShowImage src={thePhoto.src} alt={altText} />
      <ShowPhoto photo={thePhoto} />
    </>
  );
}