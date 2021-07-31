import { Table } from "react-bootstrap";

function TableResponsive(props) {
  return (
    <Table responsive hover striped>
      <thead>
        <tr>
          <th></th>
          {props.header}
        </tr>
      </thead>

      <tbody>{props.body}</tbody>
    </Table>
  );
}

export default TableResponsive;
