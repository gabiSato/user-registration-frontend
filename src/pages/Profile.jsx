import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Grid, Segment, Dimmer, Loader, Button } from "semantic-ui-react";
import "./style.css";

const Login = () => {
  const {
    state: { user, isUserLogin },
    action: { logout }
  } = useContext(AuthContext);

  return (
    <Grid textAlign="center" verticalAlign="middle" className="container">
      <Grid.Column width={6}>
        <h2>Perfil do usuário</h2>
        <Segment stacked>
          {isUserLogin ? (
            <React.Fragment>
              <h4>Bem vindo, {user.username}</h4>
              <Button fluid size="large" onClick={logout}>
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <Dimmer>
              <Loader />
            </Dimmer>
          )}
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
