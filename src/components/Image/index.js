// @flow
// libs
import React, { memo, useState } from 'react';
import IMAGES from 'themes/images';

type Props = {
  onChange?: Function,
  value: string,
  className?: string,
};

export const Image = ({ value, onChange, className }: Props) => {
  const [loadImage, setLoadImage] = useState(true);

  return (
    <div className="wrap-radio">
      <img
        src={value}
        alt=""
        onClick={onChange}
        role="presentation"
        onKeyDown={onChange}
        onError={(e) => {
          if (loadImage) {
            setLoadImage({
              loadImage: false,
            });
            e.target.src = IMAGES.image_not_found;
          }
        }}
        className={className}
      />
    </div>
  );
};

Image.defaultProps = {
  onChange: () => {},
  className: '',
};

export default memo<Props>(Image);
