import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE Gateways" subtitle="Create a New Gateways" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        // validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Gateway Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gatewayName}
                name="gatewayName"
                error={!!touched.gatewayNamee && !!errors.gatewayName}
                helperText={touched.gatewayName && errors.gatewayName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="IS Public (True/False)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.is_public}
                name="IS Public"
                error={!!touched.is_public && !!errors.is_public}
                helperText={touched.is_public && errors.is_public}
                sx={{ gridColumn: "span 2" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              /> */}
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              /> */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="latitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lat}
                name="latitude"
                error={!!touched.lat && !!errors.lat}
                helperText={touched.lat && errors.lat}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="longitude"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lon}
                name="longitude"
                error={!!touched.lon && !!errors.lon}
                helperText={touched.lon && errors.lon}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Gateway
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });
const initialValues = {
  gatewayName: "",
  is_public: "",
  // email: "",
  // contact: "",
  lat: "",
  lon: "",
};

export default Form;
