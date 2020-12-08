import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { database } from "../Components/firebase"


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            database.collection("Users").doc(currentUser.uid).set({
                displayName: currentUser.displayName,
                imgURL: currentUser.photoURL,
                UID: currentUser.uid,
            });
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }



    return (

        <>
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className=" w-100" style={{ maxWidth: "400px" }}>

                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form
                                onSubmit={handleSubmit}
                            >
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button
                                    className="w-100" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="sing-up w-100 text-center mt-2">
                        Already have an account?
                 <Link className="link-blue" to="/">Log In</Link>
                    </div>
                </div>
            </Container>

        </>
    )
}
