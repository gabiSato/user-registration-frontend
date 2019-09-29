import React, { PureComponent } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = React.createContext({});

class AuthProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isUserLogin: false,
      user: null,
      token: null
    };
  }

  signup = async data => {
    const url = "v1/signup"
    try {
      const response = await axios.post(url, data);
      if (response.data.success)
        toast.success(response.data.message)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (data) => {
    const url = "v1/signin/";
    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        const { user, token } = response.data.data;
        this.setState({ user, token, isUserLogin: true },
          toast.success.bind(null, `Bem vindo, ${user.username}`)
        )
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const value = {
      state: { ...this.state },
      action: {
        signup: this.signup,
        signin: this.signin
      }
    };

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
