import { cn } from "@/utils";
import { LoadingOutlined } from "@ant-design/icons";

export const Button = ({ children, loading, ...props }) => {
  return (
    <div className="col-12">
      <button
        className={cn(
          "btn btn-sm btn-dark flex items-center justify-center gap-2",
          {
            "disabled pointer-events-none": loading,
          }
        )}
        {...props}
      >
        {loading && <LoadingOutlined className="mr-2"></LoadingOutlined>}
        {children}
      </button>
    </div>
  );
};
