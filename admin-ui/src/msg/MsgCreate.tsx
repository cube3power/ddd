import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MsgCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="msgCode" source="msgCode" />
        <TextInput label="msgName" source="msgName" />
      </SimpleForm>
    </Create>
  );
};
