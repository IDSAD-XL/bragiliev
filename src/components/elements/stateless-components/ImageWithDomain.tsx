import React from 'react';
import Image, {ImageProps} from "next/image";


interface IImageWithDomain extends ImageProps {

}

const ImageWithDomain: React.FC<IImageWithDomain> = (props) => {
  return (
    <Image
      {...props}
      alt=""
      src={`https://grandmed.ru${String(props.src)}`}
    />
  );
};

export default ImageWithDomain;