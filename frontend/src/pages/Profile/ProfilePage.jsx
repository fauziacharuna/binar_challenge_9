import React from "react";
import "./styles.css";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProfilePage = () => {
    function toggleEdit() {

        var editButton = document.getElementsByClassName("edit1")[0]
        var cancelButton = document.getElementsByClassName("edit2")[0]

        if (editButton) {
            editButton.innerHTML = "Cancel";
            editButton.classList.remove('edit1')
            editButton.classList.add('edit2')
        } else {
            cancelButton.innerHTML = "Edit";
            cancelButton.classList.remove('edit2')
            cancelButton.classList.add('edit1')
        }

        var inputs = document.getElementsByClassName("edittable");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].toggleAttribute("disabled");
        }

        var submit = document.getElementById("submit")
        submit.toggleAttribute("hidden")

    }
    return (
        <div style={{ backgroundColor: "#252525" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col" style={{ marginTop: 61, marginLeft: 72 }}>
                        <Form>
                            <Button className="edit1" onClick={toggleEdit} style={{ "border": "none" }}>
                                Edit
                            </Button>
                            <Form.Group className="mb-3">
                                <Form.Label>Nama</Form.Label>
                                <Form.Control className="edittable" placeholder="Nama" disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="edittable" placeholder="Email" disabled />
                            </Form.Group>
                            <Button id="submit" variant="primary" type="submit" style={{"background": "#00B4FF"}} hidden>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col" style={{ margin: "24px" }}>
                        <img src="../../../assets/img-login.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
