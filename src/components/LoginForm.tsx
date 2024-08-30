import { Col, Container, Row, Form, Button } from "react-bootstrap";
import '../styles/LoginForm.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../redux/actions/authActions";

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    // const loading = useSelector((state: RootState) => state.auth.loading);
    // const error = useSelector((state: RootState) => state.auth.error);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(loginRequest(username, password));
    };

    return (
        <Container className="login-form-container">
            <Row className="login-wrapper">
                <Col xs={12} md={6}>
                    <h2 className="login-title">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="Enter username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>);
}

export default LoginForm;