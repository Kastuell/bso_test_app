import { Button, Form, FormProps, Input, Spin } from "antd";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRegisterMutation } from "../../../shared/services/auth";

type FieldType = {
  username: string;
  password: string;
  email: string;
};

export const RegisterForm = () => {
  const [register, { isLoading, error }] = useRegisterMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    register(values);
  };

  useEffect(() => {
    if (error) if ("data" in error) toast(error.data.error.message);
  }, [error]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
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
          {isLoading ? <Spin /> : "Register"}
        </Button>
      </Form.Item>
    </Form>
  );
};
