import React from "react";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardHeader,MDBIcon,MDBInput,MDBBtn,MDBModalFooter,MDBNavLink,MDBModal,MDBModalHeader,MDBModalBody} from "mdbreact";

const MyPage = () => {


    return <>
        <MDBContainer className="py-5">
            <MDBRow center>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">회원 정보</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="이메일"
                                        group
                                        type="email"
                                        icon="null"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={state.email}
                                    />
                                    <MDBInput
                                        label="닉네임 (변경 하려면 클릭)"
                                        group
                                        type="text"
                                        icon="null"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={sessionStorage.getItem('userName')}
                                        onClick={Changer}
                                    />
                                    {state.NameChanger ?
                                        <div>
                                            <MDBInput
                                                label="변경할 닉네임"
                                                group
                                                type="text"
                                                icon="null"
                                                validate
                                                onChange={userNameUpdate}
                                            />
                                            <MDBInput
                                                label="가입일"
                                                group
                                                type="text"
                                                icon="null"
                                                validate
                                                value={state.regdate.split('T')[0]}
                                            />
                                        </div> :
                                        <MDBInput
                                            label="가입일"
                                            group
                                            type="text"
                                            icon="null"
                                            validate
                                            value={state.regdate.split('T')[0]}
                                        />}
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="cyan"  onClick={Update}>
                                        닉네임 변경
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    </>
}

export default MyPage