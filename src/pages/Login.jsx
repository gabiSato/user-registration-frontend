import React, { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Grid, Segment, Form, Input, Button } from "semantic-ui-react";
import "./style.css";

const Login = () => {
  const {
    action: { signin }
  } = useContext(AuthContext);

  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const onChange = (e, data) => {
    const { name, value } = data;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => signin(state);

  return (
    <Grid textAlign="center" verticalAlign="middle" className="container">
      <Grid.Column width={6}>
        <h2>Faça seu login</h2>
        <Form>
          <Segment stacked>
            <Form.Field>
              <Input
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name="username"
                value={state.username}
                onChange={onChange}
              />
            </Form.Field>
            <Form.Field>
              <Input
                icon="lock"
                type="password"
                iconPosition="left"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={onChange}
              />
            </Form.Field>
            <Form.Field>
              <Button fluid size="large" onClick={onSubmit}>
                Login
              </Button>
            </Form.Field>
            <Form.Field>
              <p>
                Não tem uma conta? <a href="/signup">Cadastre-se</a>
              </p>
            </Form.Field>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
