import React from 'react'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginUser:"",
            loginPass:"",
            signUser:"",
            signPass:""
            }
        }

    render() {
        const {loginUser,loginPass,signUser,signPass} =this.state
        const {errorMessage,userSignup,userLogin} = this.props

        return (<div>
            {this.printErrorMessage(errorMessage)}
            <div className="left">
                <h1>login</h1>
                <input type="text" placeholder="username" name="loginUser" value={loginUser} onChange={this.handletype}/>
                <input type="text" placeholder="password" name="loginPass" value={loginPass} onChange={this.handletype} />
                <input type="button" value="Login" onClick={userLogin.bind(this,loginUser,loginPass)} />
            </div>
            <div className="right">
                <h1>signup</h1>
                <input type="text" placeholder="username" name="signUser" value={signUser} onChange={this.handletype} />
                <input type="text" placeholder="password" name="signPass" value={signPass} onChange={this.handletype} />
                <input type="button" value="Sign Up" onClick={userSignup.bind(this,signUser,signPass)} />
            </div>
        </div>)
    }

    handletype=(e)=> {
        const inputName = e.target.name
        const inputValue = e.target.value
        this.setState((prevState) => {
            const newState={ ...prevState}
            newState[inputName]=inputValue
            return newState
        })
    }

     printErrorMessage=(errorMessage)=> {
        if(errorMessage)
        return <div className="error-message">{errorMessage}</div>
    }

}

export default LoginPage