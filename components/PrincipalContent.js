import React from 'react'

export default function PrincipalContent() {
  return (
    <div
      style={{
        margin: '10px 0',
        border: '1px solid #9E9E9E',
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '20%',
          padding: '10px'
        }}
      >
        <i className="fa-solid fa-chart-gantt" style={{ color: 'red' }}></i>
        <span style={{ color: 'red', fontWeight: 'bolder' }}> Today  </span>
        <i className="fa-sharp fa-solid fa-arrow-right" style={{ color: 'red' }}></i>
      </div>

      <div
        className=' d-flex flex-column aling-items-center'
        style={{ width: '75%' }}
      >
        <div
          className='card rounded d-flex flex-row pb-2'
          style={{
            width: '100%',
            height: '20vh',
            margin: '10px 20px 10px 10px',
          }}
        >
          <div
            style={{
              padding: '20px 10px',
              width: '50%'
            }}
          >
            <div className='d-flex aling-items-center justify-content-center mb-2'>
              <i className="mt-1 fa-solid fa-right-to-bracket" style={{ color: 'green' }}></i>
              <span style={{ fontWeight: '500' }}> Logins Today</span>
            </div>
            <div
              style={{
                width: '95%',
                backgroundColor: 'green',
                height: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p style={{ color: 'white', fontSize: '1.5em', fontWeight: '400' }}>
                0
              </p>
            </div>
          </div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className='card d-flex flex-row m-2' style={{ height: '50%' }} >
              <div className='d-flex justify-content-center align-items-center' style={{ width: '20%', backgroundColor: 'black' }}>
                <div className="fa fa-asterisk fa-2x text-white"></div>
              </div>
              <div style={{ width: '80%' }} className='d-flex flex-column  align-items-center justify-content-center'>
                <div className="font-weight-bold">New Enrollments Today</div>
                <div className="valueAmount text-success">0</div>
              </div>
            </div>
            <div className='card d-flex flex-row m-2' style={{ height: '50%' }} >
              <div className='d-flex justify-content-center align-items-center' style={{ width: '20%', backgroundColor: 'black' }}>
                <div className="fa fa-spinner fa-2x text-white"></div>
              </div>
              <div style={{ width: '80%' }} className='d-flex flex-column  align-items-center justify-content-center'>
                <div className="font-weight-bold">Pending Enrrollments</div>
                <div className="valueAmount text-success">3,252</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className='card rounded d-flex flex-row pb-2'
          style={{
            width: '100%',
            height: '20vh',
            margin: '10px 20px 10px 10px',
          }}
        >
          <div
            style={{
              padding: '20px 10px',
              width: '50%'
            }}
          >
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ marginBottom: '10px' }}
            >
              <i class="fa-solid fa-tags" style={{ color: 'green' }}></i>
              <span style={{ fontWeight: '500' }}> Orders Today</span>
            </div>
            <div
              className='card d-flex  align-items-center justify-content-center'
              style={{
                width: '95%',
                backgroundColor: 'green',
                height: '80%',
              }}
            >
              <p style={{ color: 'white', fontSize: '1.5em', fontWeight: '400' }}>
                0
              </p>
            </div>
          </div>
          <div
            className='d-flex flex-column'
            style={{ width: '50%' }}
          >
            <div className='card d-flex flex-row m-2' style={{ height: '50%' }} >
              <div className='d-flex justify-content-center align-items-center' style={{ width: '20%', backgroundColor: 'black' }}>
                <div className="far fa-money-bill-alt fa-2x text-white"></div>
              </div>
              <div style={{ width: '80%' }} className='d-flex flex-column  align-items-center justify-content-center'>
                <div className="font-weight-bold">Issued Today</div>
                <div className="valueAmount text-success">0</div>
              </div>
            </div>
            <div className='card d-flex flex-row m-2' style={{ height: '50%' }} >
              <div className='d-flex justify-content-center align-items-center' style={{ width: '20%', backgroundColor: 'black' }}>
                <div className="fa fa-university fa-2x text-white"></div>
              </div>
              <div style={{ width: '80%' }} className='d-flex flex-column  align-items-center justify-content-center'>
                <div className="font-weight-bold">Redeemed Today</div>
                <div className="valueAmount text-success">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
