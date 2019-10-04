import React, { PureComponent } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import aesjs from "aes-js";

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

  componentDidMount() {
    this.isUserLoggedin();
  }

  signup = async data => {
    const url = "v1/signup";
    console.log(data)
    console.log(this.encryptData(data))
    try {
      const response = await axios.post(url, this.encryptData(data));
      if (response.data.success) toast.success(response.data.message);
      else toast.error(response.data.message)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async data => {
    const url = "v1/signin/";
    console.log(data)
    try {
      console.log(this.encryptData(data));
      const response = await axios.post(url, this.encryptData(data));
      if (response.data.success) {
        const { user, token } = response.data.data;

        const storedData = await new Promise(resolve => {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          resolve(true);
        });

        if (storedData) {
          this.setState(
            { user, token, isUserLogin: true },
            this.props.history.push(`/user/${user.id}`)
          );
        }
      }
      else toast.error(response.data.message)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  logout = async () => {
    this.setState(
      {
        user: null,
        token: null,
        isUserLogin: false
      },
      () => {
        this.props.history.push("/login");
        localStorage.clear();
      }
    );
  };

  isUserLoggedin = async () => {
    const { token, user } = localStorage;

    if (token && user) {
      this.setState({
        isUserLogin: true,
        user: JSON.parse(user),
        token
      });
    }
  };

  encryptData = data => {
    const key = Array.from({ length: 24 }, () =>
      Math.floor(Math.random() * 100)
    );
    const aesCtr = new aesjs.ModeOfOperation.ctr(key);
    const encryptedData = {};

    for (const [name, value] of Object.entries(data)) {
      const textBytes = aesjs.utils.utf8.toBytes(value);
      const encryptedBytes = aesCtr.encrypt(textBytes);
      encryptedData[name] = aesjs.utils.hex.fromBytes(encryptedBytes);
    }

    return { key, ...encryptedData };
  };

  render() {
    const value = {
      state: { ...this.state },
      action: {
        signup: this.signup,
        signin: this.signin,
        logout: this.logout
      }
    };

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default withRouter(AuthProvider);
