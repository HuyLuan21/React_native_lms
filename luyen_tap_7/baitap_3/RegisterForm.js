import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ fullName, email, password, confirmPassword }) {
  const errors = {};

  if (!fullName.trim()) {
    errors.fullName = 'Họ tên không được để trống';
  }

  if (!email.trim()) {
    errors.email = 'Email không được để trống';
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.email = 'Email không đúng định dạng';
  }

  if (!password) {
    errors.password = 'Mật khẩu không được để trống';
  } else if (password.length < 6) {
    errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Vui lòng nhập lại mật khẩu';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Mật khẩu nhập lại không khớp';
  }

  return errors;
}

function FormField({ label, error, ...inputProps }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, error && styles.inputError]} {...inputProps} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    setSuccess(false);
  };

  const handleSubmit = () => {
    const newErrors = validate(form);
    setErrors(newErrors);
    setSuccess(Object.keys(newErrors).length === 0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Form đăng ký</Text>

      <FormField
        label="Họ tên"
        placeholder="Nhập họ tên"
        value={form.fullName}
        onChangeText={(text) => handleChange('fullName', text)}
        error={errors.fullName}
      />
      <FormField
        label="Email"
        placeholder="example@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(text) => handleChange('email', text)}
        error={errors.email}
      />
      <FormField
        label="Mật khẩu"
        placeholder="Ít nhất 6 ký tự"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => handleChange('password', text)}
        error={errors.password}
      />
      <FormField
        label="Confirm mật khẩu"
        placeholder="Nhập lại mật khẩu"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
        error={errors.confirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {success ? <Text style={styles.successText}>Đăng ký thành công</Text> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#E53935',
  },
  errorText: {
    color: '#E53935',
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successText: {
    color: '#43A047',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
});
