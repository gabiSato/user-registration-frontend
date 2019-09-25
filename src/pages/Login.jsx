import React from "react";
import { Grid, Segment, Form, Input, Button } from "semantic-ui-react";
import "./style.css";

const Login = () => {
  return (
    <Grid textAlign="center" verticalAlign="middle" className="container">
      <Grid.Column width={6}>
        <h2>Faça seu login</h2>
        <Form>
          <Segment stacked>
            <Form.Field>
              <Input icon="user" iconPosition="left" placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <Input icon="lock" iconPosition="left" placeholder="Password" />
            </Form.Field>
            <Form.Field>
              <Button fluid size="large">
                Login
              </Button>
            </Form.Field>
            <Form.Field>
              <p>
                Não tem uma conta? <a href="/signin">Cadastre-se</a>
              </p>
            </Form.Field>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
