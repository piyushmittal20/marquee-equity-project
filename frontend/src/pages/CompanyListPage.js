import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table, Container, Button } from "react-bootstrap";
import { getList } from "../actions/companyAction";
import { SET_COMPANY_RESET } from "../constants/company";

const CompanyListPage = () => {
  const dispatch = useDispatch();

  const company = useSelector((state) => state.company);
  const { companies } = company;

  useEffect(() => {
    dispatch({ type: SET_COMPANY_RESET });
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <div className="head-container">
          <h1 className="heading">COMPANIES</h1>
          <Link to="/add">
            <Button>ADD COMPANY</Button>
          </Link>
        </div>
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CIN</th>
            </tr>
          </thead>
          <tbody>
            {companies &&
              companies.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.cinNumber}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CompanyListPage;
