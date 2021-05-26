import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const HzWaterMeterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"hz_water_meters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="installAddress" source="installAddress" />
        <TextField label="installDate" source="installDate" />
        <BooleanField label="isTotal" source="isTotal" />
        <TextField label="Lat" source="lat" />
        <TextField label="Lon" source="lon" />
        <TextField label="manufacture" source="manufacture" />
        <TextField label="meterID" source="meterId" />
        <TextField label="meterName" source="meterName" />
        <TextField label="notes" source="notes" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
