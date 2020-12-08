import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { auth, provider } from './firebase'


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/Home")
        } catch {
            setError("Failed to log in")
        }

    }

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider);
        {
            currentUser ? history.push("/") : history.push("/Home") 
        }
    }


    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className=" w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Log In </Button>
                                <Button className="mt-2 w-100" onClick={signInWithGoogle}>Log in with Google</Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="log-in w-100 text-center mt-2">
                        Need an account?
                 <Link className="link-blue" to="/Signup">Sign Up</Link>
                    </div>
                </div>
            </Container>

        </>
    )
}
