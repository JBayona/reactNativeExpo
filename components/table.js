import React, { Component } from "react";
import { DataTable } from "react-native-paper";
import Parse from "parse";

class AttendeeTable extends Component {
  constructor(props) {
    super(props);
  }

  triggerFunction  = () => {
    console.log(this.props);
    const Assistance = Parse.Object.extend("Assistance");
    const query = new Parse.Query(Assistance);
    // Finds objects whose title is equal to "Documentation"
    // query.equalTo("title", "Documentation");
  }

  render() {
    this.triggerFunction();
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Jorge Bayona</DataTable.Cell>
          <DataTable.Cell numeric>32423</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
    );
  }
}

export default AttendeeTable;
