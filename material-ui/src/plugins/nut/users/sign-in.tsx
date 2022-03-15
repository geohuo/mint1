import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Layout from "./NonSignInLayout";
import { useIntl } from "react-intl";

const Widget = () => {
  const handleSubmit = () => {
    // TODO
    // console.log(data.get("email"));
  };
  const intl = useIntl();
  return (
    <Layout
      logo={<LockOutlinedIcon />}
      title={intl.formatMessage({ id: "nut.users.sign-in.title" })}
      handleSubmit={handleSubmit}
    >
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label={intl.formatMessage({ id: "fields.email" })}
          name="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label={intl.formatMessage({ id: "fields.password" })}
          type="password"
          id="password"
        />
      </Grid>
    </Layout>
  );
};

export default Widget;
