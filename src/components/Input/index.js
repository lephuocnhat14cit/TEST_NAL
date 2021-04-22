// @flow

import React, { memo } from 'react';

type Props = {
  placeholder?: string,
  value?: string | number | any,
  type?: string,
  onChange?: Function,
  name?: string,
};

const Input = ({ placeholder = '', value = '', type = 'text', onChange = () => {}, name = '' }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="input__wrapper">
      <div className="input__box">
        <input
          className="input-change form-control form-control-lg"
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={(e) => onChange(e)}
          autoCapitalize="none"
          name={name}
        />
      </div>
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
  onChange: () => {},
  name: '',
};

export default memo<Props>(Input);
