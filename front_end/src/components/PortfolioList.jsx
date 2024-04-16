import ListGroup from 'react-bootstrap/ListGroup';

// function PortfolioList() {
//   return (
//     <ListGroup as="ol" numbered>
//       <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
//       <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
//       <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
//     </ListGroup>
//   );
// }

// export default PortfolioList;




function PortfolioList({ data }) {
  return (
    <>
      {data && (
        <ListGroup as="ol" numbered>
          {data.map((item, index) => (
            <ListGroup.Item as="li" key={index}>
              {item.symbol} - Quantity: {item.quantity}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default PortfolioList;