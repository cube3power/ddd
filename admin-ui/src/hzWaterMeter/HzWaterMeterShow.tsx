import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const HzWaterMeterShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
