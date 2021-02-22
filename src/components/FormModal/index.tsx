import { Form, Input, Radio } from "antd";
import { useForm } from "antd/lib/form/Form";
import Modal from "antd/lib/modal/Modal";

type FormModalProps = {
  title: string;
  visible?: boolean;
  handleOk: Function;
  handleClose: Function;
  formObj: FormObjType;
  userCompanyId: number;
};

interface FormObjType {
  name: string;
  inputs: {
    name: string;
    label: string;
    type?: string;
    value?: any;
    required?: boolean;
    radioGroup?: { label: string; value: any }[];
    radioLoading?: boolean;
  }[];
}

const FormModal = ({
  title,
  visible,
  handleOk,
  handleClose,
  formObj,
}: FormModalProps) => {
  const [form] = useForm();
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          handleOk(values)();
          handleClose();
        });
      }}
      onCancel={() => handleClose()}
    >
      <Form form={form} layout="vertical" name={formObj.name}>
        {formObj.inputs.map(
          ({
            name,
            label,
            type,
            radioGroup,
            radioLoading,
            required,
            value,
            ...rest
          }) => (
            <Form.Item
              name={name}
              label={label}
              key={label}
              initialValue={(radioGroup && radioGroup[0].value) || value}
              rules={[
                {
                  required: required,
                  message: `Por favor, preencha esse campo`,
                },
              ]}
            >
              {type === "radio" ? (
                <>
                  {!radioLoading && (
                    <Radio.Group options={radioGroup} {...rest} />
                  )}
                </>
              ) : (
                <Input type={type} {...rest} />
              )}
            </Form.Item>
          )
        )}
      </Form>
    </Modal>
  );
};

export default FormModal;
