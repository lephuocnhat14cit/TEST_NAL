// @flow
import React, { useState, memo, useEffect } from 'react';
import Input from 'components/Input';
import { useHistory } from 'react-router-dom';
import Checkbox from 'components/Checkbox';
import ROUTERS from 'constants/router';
import ModalPopup from 'components/Modal';
import { API } from '../../../../utils/Apis';
import IMAGES from '../../../../themes/images';

type Props = {
  signIn: Function,
  token: any,
  type: any,
  history: {
    push: Function,
    location: {
      pathname: string,
    },
  },
  resetType: Function,
  isCheckedBox: boolean,
};

const SignIn = ({ signIn, token, type, resetType, isCheckedBox }: Props) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [textError, setTextError] = useState(false);
  const [myInfo, setMyInfo] = useState({
    username: '',
    password: '',
    isChecked: isCheckedBox || false,
  });
  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setMyInfo({
      ...myInfo,
      [name]: value,
    });
  };
  const { isChecked } = myInfo;
  const handleLogin = () => {
    if (!(myInfo && myInfo.username && myInfo.username.trim())) {
      setIsOpen(true);
      setTextError('Required to enter email');
      return;
    }
    if (!(myInfo && myInfo.password && myInfo.password.trim())) {
      setIsOpen(true);
      setTextError('Required to enter password');
      return;
    }
    signIn({
      username: myInfo?.username,
      password: myInfo?.password,
    });
  };
  useEffect(() => {
    if (!token) {
      resetType();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    switch (type) {
      case 'SIGN_IN_SUCCESS':
        if (token) {
          API.setHeader('Authorization', `Bearer ${token}`);
          history.push(ROUTERS.MAIN_PAGE);
        }
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, type]);
  const handleSave = () => {
    setMyInfo({
      ...myInfo,
      isChecked: !isChecked,
    });
  };
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src={IMAGES.logo} alt="logo" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <div className="form-group pt-3">
                    <Input
                      placeholder="Username"
                      value={myInfo?.username}
                      onChange={(e) => handleChangeInput(e)}
                      name="username"
                      type="email"
                      customClass="form-control form-control-lg"
                    />
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
                  <div className="mt-3">
                    <div
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={() => {
                        handleLogin();
                      }}
                      onKeyDown={() => {
                        handleLogin();
                      }}
                      tabIndex={0}
                      role="button"
                    >
                      SIGN IN
                    </div>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <Checkbox
                      label="Keep me signed in"
                      checked={myInfo?.isChecked}
                      //     onChange={() => setIsSaveId(!isSaveId)}
                      onChange={() => handleSave()}
                      name="saveId"
                    />
                    <div href="#" className="auth-link text-black">
                      Forgot password?
                    </div>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="ti-facebook mr-2" />
                      Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{' '}
                    <span
                      className="text-primary"
                      onClick={() => {
                        history.push(ROUTERS.SIGN_UP);
                      }}
                      onKeyDown={() => {}}
                      tabIndex={0}
                      role="button"
                    >
                      Create
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalPopup
          isOpen={isOpen}
          isShowFooter
          handleClose={() => {
            setIsOpen(false);
          }}
          customClassButton="w-100"
          textBtnRight="confirm"
          isShowHeader
          title="notification"
          classNameBtnRight="btn-right"
          classNameBtnLeft="btn-left"
        >
          <div className="title-content">{textError}</div>
        </ModalPopup>
      </div>
    </>
  );
};

export default memo<Props>(SignIn);
