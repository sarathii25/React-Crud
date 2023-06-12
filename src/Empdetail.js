import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Empdetail = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="card offset-lg-3 col-lg-6" >
        <div className="card-title">
          <h2>Employee Details</h2>
        </div>
        <div className="card-body">
          {empdata && (
            <div>
              <h3>The Employee Name is <b>{empdata.name}</b> and ID {empdata.id}</h3>              
              <h3>Contact Details</h3>
              <h5>Email Id : {empdata.email}</h5>
              <h5>Phone No : {empdata.phoneno}</h5>
              <Link to={"/"} className="btn btn-danger">Back to Main Menu</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Empdetail;
