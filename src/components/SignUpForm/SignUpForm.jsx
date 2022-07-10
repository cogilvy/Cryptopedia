import { useState } from "react";
import { signUp } from "../../utilities/users-service";
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

function SignUpForm({setUser}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value, error: ''});
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const creds = {...formData};
      delete creds.error;
      delete creds.confirm;
    
      const user = await signUp(creds);
      setUser(user);
      navigate('/');
    } catch {
      // An error occurred...
      setFormData({...formData, error: 'Sign Up Failed - Try Again'});
    }
  }

  return (
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column width={6}>
        <Header as='h2' color='black' textAlign='center'>
          <Image src='https://hashoshi.com/wp-content/uploads/2019/01/icx_coin_icon.png' /> Sign Up For An Account
        </Header>
        <Form onSubmit={handleSubmit} size='large'>
          <Segment stacked>
            <Form.Input
              onChange={handleChange}
              fluid
              icon='at'
              iconPosition='left'
              name="name"
              value={formData.name}
              placeholder='Name'
              />
            <Form.Input
              onChange={handleChange}
              fluid
              icon='at'
              iconPosition='left'
              name="email"
              value={formData.email}
              placeholder='Email'
              />
            <Form.Input
              onChange={handleChange}
              fluid
              icon='lock'
              iconPosition='left'
              name="password"
              placeholder='Password'
              value={formData.password}
              type='password'
              />
            <Form.Input
              onChange={handleChange}
              fluid
              icon='lock'
              iconPosition='left'
              name="confirm"
              placeholder='Confirm Password'
              value={formData.confirm}
              type='password'
              />
            <Button color='teal' fluid size='large'>
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="/login"><Button size="small" className="hover">Login</Button></NavLink>
        </Message>
        { formData.error && <Message color={"red"}>&nbsp;{formData.error}</Message> }
      </Grid.Column>
    </Grid>
  );
}


export default SignUpForm;