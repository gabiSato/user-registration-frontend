import React, { PureComponent } from "react";

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

  render() {
    const value = {
      state: { ...this.state },
      action: {}
    };

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
