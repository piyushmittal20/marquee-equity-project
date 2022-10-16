import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCompany, createCompany } from "../actions/companyAction";

const CompanyAddPage = ({ history }) => {
  const [keyWord, setKeyWord] = useState("");
  const [cin, setCin] = useState("");

  const selectItem = (item) => {
    setKeyWord(item.name);
    setCin(item.cin);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      name: keyWord,
      cinNumber: cin,
    };
    dispatch(createCompany(body));
  };

  const dispatch = useDispatch();

  const company = useSelector((state) => state.company);
  const { searchList, success, error } = company;

  useEffect(() => {
    dispatch(searchCompany(keyWord));
    if (success) {
      history.push("/");
    }
  }, [keyWord, setKeyWord, success, history]);

  return (
    <div>
      <Container>
        <Form className="form-container" onSubmit={submitHandler}>
          <Form.Control
            type="text"
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            placeholder="Search Products..."
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
          <Button type="submit" variant="outline-success" className="p-2">
            Submit
          </Button>
        </Form>
        {error && <p className="error">{error}</p>}
        <div style={{ margin: "20px 40px" }}>
          {searchList &&
            searchList.map((item, index) => (
              <h4
                key={index}
                className="h4-tag"
                onClick={() => selectItem(item)}
              >
                {item.name}
              </h4>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default CompanyAddPage;
