import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ListProps,
  DateField,
  TextField,
} from "react-admin";

export const MsgShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="msgCode" source="msgCode" />
        <TextField label="msgName" source="msgName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
