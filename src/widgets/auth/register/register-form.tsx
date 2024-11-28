import { Button, Form, FormProps, Input } from "antd";

type FieldType = {
  username: string;
  password: string;
  email: string;
};

export const RegisterForm = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[
          { required: true, message: "Please input your username!", min: 3 },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!", min: 8 },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
