import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignInContainer from '../components/SignIn';
import { Creators } from '../redux';

const mapStateToProps = (state) => {
  return {
    token: state.accountReducer.token,
    type: state.accountReducer.type,
    isCheckedBox: state.accountReducer.isCheckedBox,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...Creators,
      signIn: Creators.signIn,
      resetType: Creators.resetType,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
