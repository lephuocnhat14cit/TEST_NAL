import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpContainer from '../components/SignUp';
import { Creators } from '../redux';

const mapStateToProps = (state) => {
  return {
    // dataNotice: state.orderReducer.dataNotice,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...Creators,
      //  getNotice: Creators.getNotice,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
