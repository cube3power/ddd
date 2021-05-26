import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const HzWaterMeterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="installAddress" source="installAddress" />
        <DateTimeInput label="installDate" source="installDate" />
        <BooleanInput label="isTotal" source="isTotal" />
        <NumberInput label="Lat" source="lat" />
        <NumberInput label="Lon" source="lon" />
        <TextInput label="manufacture" source="manufacture" />
        <TextInput label="meterID" source="meterId" />
        <TextInput label="meterName" source="meterName" />
        <TextInput label="notes" source="notes" />
      </SimpleForm>
    </Edit>
  );
};
