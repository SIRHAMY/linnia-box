import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { tryLoginUser } from './LoginFormActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginFormSubmit: (username, password) => {
      dispatch(tryLoginUser(username, password))
    }
  }
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer