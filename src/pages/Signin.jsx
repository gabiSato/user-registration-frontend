import React from "react";
import { Grid, Segment, Form, Input, Button } from "semantic-ui-react";
import "./style.css";

const Signin = () => {
  return (
    <Grid textAlign="center" verticalAlign="middle" className="container">
      <Grid.Column width={6}>
        <h2>Faça seu Cadastro</h2>
        <Form>
          <Segment stacked>
            <Form.Field>
              <Input icon="user" iconPosition="left" placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <Input icon="mail" iconPosition="left" placeholder="E-mail" />
            </Form.Field>
            <Form.Field>
              <Input icon="lock" iconPosition="left" placeholder="Password" />
            </Form.Field>
            <Form.Field>
              <Button fluid size="large">
                Cadastrar
              </Button>
            </Form.Field>
            <Form.Field>
              <p>
                Já tem uma conta? <a href="/login">Login</a>
              </p>
            </Form.Field>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Signin;
