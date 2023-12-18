import React from 'react'

import './position.css'
import SideBar from '../../common/sidebar/SideBar'
import Table from 'react-bootstrap/Table'

const Intershippositons = () => {
  return (
    <SideBar>
      <div className='positons-table'>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>STT</th>
              <th>Vị trí thực tập</th>
              <th>Công ty</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </SideBar>
  )
}

export default Intershippositons