import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Emplisting = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const loadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const loadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const removeData = (id) => {
    if (window.confirm("Do You want to remove?")) {
      fetch("http://localhost:8000/employee/"+id, {
        method: "DELETE"        
      })
        .then((res) => {
          alert("Removed Successfully...");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:8000/employee")
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
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="linkbtn">
            <Link to="/employee/create" className="btn btn-success">
              Add New Employee
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>PhoneNo</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneno}</td>
                    <td>
                      <a
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          removeData(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </a>
                      <a
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Emplisting;
