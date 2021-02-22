import { Form, Input, Radio, RadioChangeEvent } from "antd";
import { useForm } from "antd/lib/form/Form";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";

type FormModalProps = {
  title: string;
  visible?: boolean;
  handleOk: Function;
  handleClose: Function;
  formObj: FormObjType;
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
  const [radioValue, setRadioValue] = useState();

  function onRadioChange(event: RadioChangeEvent) {
    setRadioValue(event.target.value);
  }

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
              initialValue={value}
              rules={[
                {
                  required: required,
                  message: `Por favor, preencha esse campo`,
                },
              ]}
            >
              {type === "radio" ? (
                <Radio.Group
                  options={radioGroup}
                  value={radioValue || (radioGroup && radioGroup[0].value)}
                  onChange={onRadioChange}
                />
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
