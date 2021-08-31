import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const HzWaterMeterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="installAddress" source="installAddress" />
        <DateTimeInput label="installDate" source="installDate" />
        <BooleanInput label="isTotal" source="isTotal" />
        <DateTimeInput label="lastUpdateTime" source="lastUpdateTime" />
        <NumberInput label="Lat" source="lat" />
        <NumberInput label="Lon" source="lon" />
        <TextInput label="manufacture" source="manufacture" />
        <TextInput label="meterID" source="meterId" />
        <TextInput label="meterName" source="meterName" />
        <TextInput label="notes" source="notes" />
        <NumberInput label="pressure" source="pressure" />
        <NumberInput label="totalValue" source="totalValue" />
      </SimpleForm>
    </Create>
  );
};
