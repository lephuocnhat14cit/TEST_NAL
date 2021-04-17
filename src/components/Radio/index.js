// @flow
// libs
import React, { memo } from 'react';
import IMAGES from 'themes/images';

type Props = {
  onChange: Function,
  isChecked: boolean,
  labelRadio: string,
};

export const Radio = ({ isChecked, onChange, labelRadio }: Props) => {
  return (
    <div className={`wrap-radio ${isChecked ? 'active' : ''}`}>
      <img
        src={isChecked ? IMAGES.radioOn : IMAGES.radioOff}
        alt=""
        onClick={onChange}
        role="presentation"
        onKeyDown={onChange}
      />
      <div
        className="title"
        onClick={onChange}
        role="presentation"
        onKeyDown={onChange}
      >
        {labelRadio}
      </div>
    </div>
  );
};

export default memo<Props>(Radio);
