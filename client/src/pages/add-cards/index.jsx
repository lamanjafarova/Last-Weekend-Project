import React from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./index.scss"
 
 const AddCourseSchema = Yup.object().shape({
    title: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
     name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });
const AddCards = () => {
    const navigate = useNavigate()
  return (
    <div id="addCourse">
        <div className="container">
        <div className="formik">
        <h1> Add Course </h1>
          <Formik
            initialValues={{
              title: "",
              name: "",
              description: "",
              price: "",
              imgUrl: "",
            }}
            validationSchema={AddCourseSchema}
            onSubmit={(values) => {
              axios.post(`http://localhost:8080/course`, values);
              navigate("/")
            }}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <div className="input">
                  <Field name="title" placeholder="Title" />
                  {errors.title && touched.title ? (
                    <div>{errors.title}</div>
                  ) : null}
                </div>

                <div className="input">
                <Field name="name" placeholder="Name"  />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                </div>

                <div className="input">
                <Field name="description" type="text" placeholder="Description"  />
                </div>

                <div className="input">
                <Field name="price" placeholder="Price" />
                </div>

                <div className="input">
                <Field name="imgUrl" placeholder="Image Url"  />
                </div>

                <button type="submit" className="formikBtn">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
{/* <Formik
       initialValues={{
         title: '',
         name: '',
         description: '',
         price: '',
         imgUrl: '',
       }}
       validationSchema={AddCourseSchema}
       onSubmit={values => {
        axios.post("http://localhost:8080/course", values)
        navigate("/")
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="title" placeholder="Title" />
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}
           <Field name="name" placeholder="Name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
             <Field name="description" placeholder="Description"/>
             <Field name="price" placeholder="Price"/>
             <Field name="imgUrl" placeholder="Image Url"/>
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik> */}

    </div>
  )
}

export default AddCards