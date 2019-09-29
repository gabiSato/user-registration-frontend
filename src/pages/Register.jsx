import React, { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Grid, Segment, Form, Input, Button } from "semantic-ui-react";
import "./style.css";

const Register = () => {
  const { action: { signup } } = useContext(AuthContext);

  const [state, setState] = useState({
    username: "",
    email: "",
    password: ""
  })

  const onChange = (e, data) => {
    const { name, value } = data;
    setState(prev => ({ ...prev, [name]: value }))
  };

  const onSubmit = () => 
    signup(state)

  return (
    <Grid textAlign="center" verticalAlign="middle" className="container">
      <Grid.Column width={6}>
        <h2>Faça seu Cadastro</h2>
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
                icon="mail" 
                iconPosition="left" 
                placeholder="E-mail" 
                name="email"
                value={state.email}
                onChange={onChange}
              />
            </Form.Field>
            <Form.Field>
              <Input 
                type="password"
                icon="lock" 
                iconPosition="left" 
                placeholder="Password"
                name="password"
                value={state.password} 
                onChange={onChange}
              />
            </Form.Field>
            <Form.Field>
              <Button fluid size="large" onClick={onSubmit}>
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

export default Register;
