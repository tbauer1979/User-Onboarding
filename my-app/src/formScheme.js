import * as yup from 'yup'


export const schema = yup.object().shape({
    name: yup.string().min(3, "Must be at least 3 characters!").required("Username is required!"),
    email: yup.string().email("Must be a valid email!").required("Email is required!"),
    password: yup.string().min(10,"make it SECRET").required("password is required!"),
    tos: yup.boolean().oneOf([true]).required("password is required!"),
})


export default schema