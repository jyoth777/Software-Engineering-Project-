import React, { Profiler } from 'react';
import './profile.css'

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function Person() {
    return (
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>

            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="10" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-10">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                        <a href="http://localhost:3000/profile/webcam">
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                        alt="Avatar" className="my-5" style={{ width: '200px' }} fluid /></a>
                                    <MDBTypography tag="h2">Name</MDBTypography><br />
                                    <MDBCardText tag="h3">User</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h3">Information</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="20" className="mb-3">
                                                <MDBTypography tag="h3">Email</MDBTypography>
                                                <MDBCardText className="text-muted" tag="h4">info@example.com</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="20" className="mb-3">
                                                <MDBTypography tag="h3">Phone</MDBTypography>
                                                <MDBCardText className="text-muted" tag="h4">123 456 789</MDBCardText>

                                            </MDBCol>
                                           
                                           
                                        </MDBRow>
                                       
                                        <MDBRow className="pt-4">
                                            <MDBCol size="20" className="mb-3">
                                                <MDBTypography tag="h3">Address</MDBTypography>
                                                <MDBCardText className="text-muted" tag="h4">Bangalore</MDBCardText>
                                                <button class="button edit" onClick={() => { window.location.href = 'http://localhost:3000/profile/edit'; }}>Edit profile</button>  
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}