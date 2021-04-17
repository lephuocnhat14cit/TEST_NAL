import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getUserContainer from '../components';
import { Creators } from '../redux';

const mapStateToProps = (state) => {
  return {
    dataUser: state.myInfoReducer.dataUser,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...Creators,
      getUser: Creators.getUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(getUserContainer);
