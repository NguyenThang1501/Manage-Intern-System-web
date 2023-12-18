import React from 'react'
import SideBar from '../../common/sidebar/SideBar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const StudentRegister = () => {
  return (
    <SideBar>
      <Container>

        <h3>Nhập các nguyện vọng</h3>
        <Form.Control size="lg" type="text" placeholder="Nguyện vọng 1" />
        <br />
        <Form.Control size="lg" type="text" placeholder="Nguyện vọng 2" />
        <br />
        <Form.Control size="lg" type="text" placeholder="Nguyện vọng 3" />
        <br />
        <Button variant="outline-primary">Đăng ký</Button>{' '}
      </Container>

    </SideBar>
  )
}

export default StudentRegister