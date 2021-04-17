// @flow

import React, { memo, lazy, Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { API } from '../utils/Apis';
import ROUTERS from '../constants/router';
import PrivateRoute from '../utils/PrivateRoute';
import { Creators as AccountCreators } from '../screens/account/redux';

const SignInContainer = lazy(() => import('../screens/account/containers/signInContainer'));
const signUpContainer = lazy(() => import('../screens/account/containers/signUpContainer'));
const mainPageContainer = lazy(() => import('../screens/main/containers/getUserContainer'));

type Props = {
  token: string,
};

const Router = ({ token }: Props) => {
  const isAuthenticated = token !== '';
  if (token) {
    API.setHeader('Authorization', `Bearer ${token}`);
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="d-none">Loading.....</div>}>
        <Switch>
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path={ROUTERS.MAIN_PAGE}
            component={mainPageContainer}
          />
          <Route exact path={ROUTERS.LOGIN} component={SignInContainer} />
          <Route exact path={ROUTERS.SIGN_UP} component={signUpContainer} />
        </Switch>
      </Suspense>
      {/* ) */}
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.accountReducer.token,
    type: state.accountReducer.type,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...AccountCreators,
      logOutWhenDenied: AccountCreators.logOutWhenDenied,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(memo<Props>(Router));
