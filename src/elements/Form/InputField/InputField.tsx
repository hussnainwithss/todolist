import React from 'react';
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  Platform,
  Text,
} from 'react-native';
import { Formik, FormikHelpers, FormikErrors } from 'formik';
import * as Yup from 'yup';
import { Props, FormValues } from 'elements/Form/InputField/types';
import { styles } from 'elements/Form/InputField/style';

const InputField: React.FC<Props> = ({
  placeholder,
  submissionHelper,
  addIcon,
  name,
}) => {
  const intialValues: FormValues = {
    value: '',
  };

  const validationSchema = Yup.object({
    value: Yup.string()
      .required(`${name} is required`)
      .max(255, `${name} cannot be greater than 225 characters`),
  });
  const formSubmitHandler = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const { setSubmitting, setErrors, resetForm, setTouched } = actions;
    try {
      // Keyboard.dismiss();
      submissionHelper(values.value);
      resetForm();
      Keyboard.dismiss();
      setTouched({ value: undefined });
      setErrors({ value: '' });
      setSubmitting(false);
      return;
    } catch (error) {
      let formErrors: FormikErrors<FormValues> = {};
      formErrors.value = error as string;
      setErrors(formErrors);
      setSubmitting(false);
      return;
    }
  };

  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={formSubmitHandler}
      validateOnBlur={false}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        values,
        errors,
        touched,
      }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            onChangeText={handleChange('value')}
            placeholder={placeholder}
            onBlur={handleBlur('value')}
            value={values.value}
            style={
              touched.value && errors.value ? styles.fieldError : styles.input
            }
          />
          {touched.value && errors.value ? (
            <Text style={styles.inputError}></Text>
          ) : null}
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}
            disabled={isSubmitting}
          >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>{addIcon}</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default InputField;
