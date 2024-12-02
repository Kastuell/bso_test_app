import { toast } from "sonner";
import { Button, Form, FormProps, Input, Spin } from "antd";
import { useLoginMutation } from "../../../shared/services/auth";

type FieldType = {
  password: string;
  identifier: string;
};

export const LoginForm = () => {
  const [login, { isLoading, error, data }] = useLoginMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    login(values);
  };

  if (error) if ("data" in error) toast(error.data.error.message);

  if (data) toast(`Hello ${data.user.username}!`);

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
        name="identifier"
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
          {isLoading ? <Spin /> : "Log in"}
        </Button>
      </Form.Item>
    </Form>
  );
};
