import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/shostga/noona-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data: ", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.choice === true ? "Conscious choice" : ""}</div>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.new === true ? "신제품" : ""}</div>
          <div>
            {product ? (
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  Size
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {product?.size.map((sizeValue) => (
                    <Dropdown.Item>{sizeValue}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              ""
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
