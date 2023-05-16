import { Button, Popconfirm as PosconfirmM } from "antd";

export const Popconfirm = ({ showCancel = true,description, ...props }) => {
  return (
    <PosconfirmM
      {...props}
      showCancel={false}
      okButtonProps={{hidden: true}}
      description={
        <>
          {description}
          <div className="flex justify-end mt-2">
            {
            showCancel && <Button outline className="btn-sm" onClick={props.onCancel}>{props.cancelText || "Cancel"}</Button>
            }
            <Button className="btn-sm" onClick={props.onConfirm}>{props.okText || "Ok"}</Button>
          </div>
        </>
      }
    />
  );
};
