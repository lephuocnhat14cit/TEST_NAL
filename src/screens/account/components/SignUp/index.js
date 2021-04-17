// @flow
import React, { useState, memo } from 'react';
import Input from 'components/Input';
import ROUTERS from 'constants/router';
import Checkbox from 'components/Checkbox';
import IMAGES from '../../../../themes/images';

type Props = {
  history: {
    push: Function,
  },
};

const SignUp = ({ history }: Props) => {
  const [isSaveId, setIsSaveId] = useState(false);

  const [myInfo, setMyInfo] = useState({
    username: '',
    mail: '',
    password: '',
  });
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setMyInfo({
      ...myInfo,
      [name]: value,
    });
  };
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={IMAGES.logo} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <div className="form-group pt-3">
                  <Input
                    placeholder="Username"
                    value={myInfo?.username}
                    onChange={(e) => handleChangeInput(e)}
                    name="username"
                    type="text"
                    customClass="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <Input
                    placeholder="Email"
                    value={myInfo?.mail}
                    onChange={(e) => handleChangeInput(e)}
                    name="mail"
                    type="email"
                    customClass="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div>
                <div className="form-group">
                  <Input
                    placeholder="Password"
                    value={myInfo?.password}
                    onChange={(e) => handleChangeInput(e)}
                    name="password"
                    type="password"
                    customClass="form-control form-control-lg"
                  />
                </div>
                <div className="mb-4 custom-checkbox">
                  <Checkbox
                    label="  I agree to all Terms & Conditions"
                    checked={isSaveId}
                    onChange={() => setIsSaveId(!isSaveId)}
                    name="saveId"
                  />
                </div>
                <div className="mt-3">
                  <div
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    onClick={() => {}}
                    onKeyDown={() => {}}
                    tabIndex={0}
                    role="button"
                  >
                    SIGN UP
                  </div>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{' '}
                  <span
                    href="login.html"
                    className="text-primary"
                    onClick={() => {
                      history.push(ROUTERS.LOGIN);
                    }}
                    onKeyDown={() => {
                      history.push(ROUTERS.LOGIN);
                    }}
                    tabIndex={0}
                    role="button"
                  >
                    Login
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(SignUp);
