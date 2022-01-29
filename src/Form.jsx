import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const url = " http://13.233.217.107:8080/api/AddAppointment";

  const [data, setData] = useState({
    Title: "",
    AppointmentDate: "",
    AppointmentTime: "",
    AppointmentChannel: "yes",
    AppointmentType: "",
    AppointmentStatus: "active",

    FirstName: "",
    LastName: "",
    BookedDate: "",
    Address: "",
    City: "",
    State: "",
    pincode: "",
    country: "",

    Patient_BP: "",
    Patient_Plus: "",
    Patient_SPO2: "",
    Patient_Temp: "",
    Patient_Weight: "",
    Patient_Height: "",
    ShortNote: "",
    PrescriptionNote: "",
    UserId: "810459219",
    ClinicId: "122990548",
    DoctorId: "45346070",
  });

  function handleClick(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
    let p = JSON.stringify(newData);
    console.log(p);
   
  }

  function submit(e) {
    
   

    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <div class="container-fluid border-top border-3">
        <div className="d-inline-flex flex-column p-5 bg-secondary text-white icons">
          <div className="icons1">
            <div>
            
              <i className="fas fa-user-check"></i>
            </div>
            <div>
            
              <i className="fa fa-desktop"></i>
            </div>
            <div>
            
              <i className="fa fa-address-book"></i>
            </div>
            <div>
            
              <i className="fas fa-user-check"></i>
            </div>
            <div>
            
              <i className="fa fa-home"></i>
            </div>
            <div>
            
              <i className="fa fa-desktop"></i>
            </div>
            <div>
            
              <i className="fa fa-clone"></i>
            </div>
            <div>
              
              <i className="fa fa-credit-card"></i>
            </div>
            <div>
            
              <i className="fa fa-clone"></i>
            </div>
          </div>
        </div>
      </div>

      <h1 id="praik" className="px-5">
        Book Appoinment
      </h1>

      <div className="form">
        <form onSubmit={(e) => submit(e)}>
          <div className="col-md-6">
            <h2 className="text-primary">Details</h2>
            <div class="col-md-9">
              <input
                type="text"
                id="Title"
                className="form-control"
                placeholder="Appointment Title"
                onChange={(e) => handleClick(e)}
                value={data.Title}
              />
            </div>
            <br />
            <br />
            <br />
            <div className="cols_Section d-flex flex-column justify-content-center col-md-9 ">
              <input
                type="text"
                onChange={(e) => {
                  handleClick(e);
                }}
                value={data.FirstName}
                id="FirstName"
                placeholder="FirstName"
                className="form-control"
              />
              <br></br>
              <input
                type="text"
                onChange={(e) => {
                  handleClick(e);
                }}
                value={data.LastName}
                id="LastName"
                placeholder="LastName"
                className="form-control"
              />
              <br></br>
              <input
                type="date"
                onChange={(e) => {
                  handleClick(e);
                }}
                value={data.BookedDate}
                id="BookedDate"
                placeholder="BookedDate"
                className="form-control"
              />
              <br></br>
            </div>
            <div className="col-md-9 apcha">
              <select
                className="col-md-6"
                placeholder="Appointment Channel"
                className="form-select"
                id="AppointmentChannel"
                name="AppointmentChannel"
                onChange={(e) => handleClick(e)}
                value={data.AppointmentChannel}
              >
                <option value="A-channel" selected="selected">
                  Appointment Channel
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <br /> <br /> <br />
            <div class="col-md-9">
              <select
                className="col-md-3"
                className="form-control"
                placeholder="Doctor"
                className="form-select"
                id="Dr_name"
                onChange={(e) => handleClick(e)}
                value={data.Dr_name}
              >
                <option value="" selected="selected">
                  Doctor
                </option>
                <option value="Dr.Arun Barge">Dr. Arun Barge</option>
                <option value="Dr.Sagar Shinde">Dr. Sagar Shinde</option>
                <option value="Dr.Ram Barge">Dr. Ram Barge</option>
              </select>
              <label htmlFor="DoctorId">DoctorId</label>
              <input
                type="text"
                onChange={(e) => {
                  handleClick(e);
                }}
                value={data.DoctorId}
                id="DoctorId"
                placeholder="45346070"
                className="form-control"
              />
              <br></br>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className=" h1 text-primary"> Appointment Details</h2>
            <br />
            <h5>John Wick M-9848848222</h5>
            <div className="form-check form-switch">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Walk-In Appointment
              </label>
              <input
                style={{ padding: "7px 15px" }}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
            <br />
            <h5>Schedule</h5>
            <input
              className="col-md-5"
              onChange={(e) => {
                handleClick(e);
              }}
              id="AppointmentDate"
              value={data.AppointmentDate}
              type="date"
              name="AppointmentDate"
            />
            &#160; &#160; &#160;
            <input
              className="col-md-"
              onChange={(e) => {
                handleClick(e);
              }}
              id="AppointmentTime"
              value={data.AppointmentTime}
              type="time"
              name="AppointmentTime"
            />
            <br />
            <br />
            <br />
            <div className="col-md-9">
              <select
                onChange={(e) => {
                  handleClick(e);
                }}
                id="AppointmentType"
                value={data.AppointmentType}
                className="form-select"
                placeholder="Appointment Channel"
              >
                <option>Appoinement Type</option>
                <option>Type-1</option>
                <option>Type-2</option>
                <option>Type-3</option>
              </select>
            </div>
            <div className=" col-md-9">
              <label htmFor="UserId">UserId</label>
              <input
                type="text"
                onChange={(e) => {
                  handleClick(e);
                }}
                value={data.UserId}
                id="UserId"
                placeholder="810459219"
                className="form-control"
              />
              <br></br>
              <label htmlFor="ClinicId">ClinicId</label>
              <input
                type="text"
                onChange={(e) => {
                  handleClick(e);
                }}
                value={data.ClinicId}
                id="ClinicId"
                placeholder="122990548"
                className="form-control"
              />
              <br></br>
              <input
                type="text"
                onChange={(e) => {
                  handleClick(e);
                }}
                value={data.Address}
                id="Address"
                placeholder="Address"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-12">
            <hr />
            <h2 className="text-primary">Vital Information</h2>
          </div>
          <div className="input-group ">
            <span className="input-group-text">Blood Pressure</span>
            <input
              type="text"
              onChange={(e) => handleClick(e)}
              value={data.Patient_BP}
              id="Patient_BP"
              className="col-md-1"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="input-group-text">Height</span>
            <input
              type="text"
              onChange={(e) => handleClick(e)}
              value={data.Patient_Height}
              id="Patient_Height"
              className="col-md-1"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="input-group-text">SPo2</span>
            <input
              type="text"
              onChange={(e) => handleClick(e)}
              value={data.Patient_SPO2}
              id="Patient_SPO2"
              className="col-md-1"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="input-group-text">Tempreture</span>
            <input
              type="text"
              onChange={(e) => handleClick(e)}
              value={data.Patient_Temp}
              id="Patient_Temp"
              className="col-md-1"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="input-group-text">Weight</span>
            <input
              type="text"
              onChange={(e) => handleClick(e)}
              value={data.Patient_Weight}
              id="Patient_Weight"
              className="col-md-1"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="input-group-text">Pluse Rate</span>
            <input
              type="text"
              onChange={(e) => handleClick(e)}
              value={data.Patient_Plus}
              id="Patient_Plus"
              className="col-md-1"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <br /> <br />
          <div className="text-type">
            <div class="row">
              <div class="col">
                <textarea
                  id="ShortNote"
                  name="ShortNote"
                  rows="4"
                  cols="50"
                  placeholder="Reason"
                  style={{ borderRadius: "5" }}
                  onChange={(e) => handleClick(e)}
                  value={data.ShortNote}
                ></textarea>
              </div>
              <div class="col">
                <textarea
                  id="PrescriptionNote"
                  name="PrescriptionNote"
                  rows="4"
                  cols="50"
                  placeholder="Note For Doctor"
                  style={{ borderRadius: "5" }}
                  onChange={(e) => handleClick(e)}
                  value={data.PrescriptionNote}
                ></textarea>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="position-absolute start-50 translate-middle">
            <button type="reset" className="btn btn-primary btn-lg ">
              Cancel
            </button>{" "}
            &#160; &#160; &#160;
            <button type="submit" className="btn btn-primary btn-lg width:29px">
              Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
