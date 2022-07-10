import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column width={6}>
        <Header as='h2' color='black' textAlign='center'>
          <Image src='https://hashoshi.com/wp-content/uploads/2019/01/icx_coin_icon.png' /> Login To Your Account
        </Header>
        <Form onSubmit={handleSubmit} size='large'>
          <Segment stacked>
            <Form.Input
              onChange={handleChange}
              fluid
              icon='at'
              iconPosition='left'
              name="email"
              value={credentials.email}
              placeholder='Email'
              />
            <Form.Input
              onChange={handleChange}
              fluid
              icon='lock'
              iconPosition='left'
              name="password"
              placeholder='Password'
              value={credentials.password}
              type='password'
              />
            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="/signup"><Button size="small" className="hover">Sign Up</Button></NavLink>
        </Message>
        { error && <Message color={"red"}>&nbsp;{error}</Message> }
      </Grid.Column>
    </Grid>
  );
}