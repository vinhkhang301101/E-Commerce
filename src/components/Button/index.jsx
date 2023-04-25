// import { cn } from "@/utils";
// import { LoadingOutlined } from "@ant-design/icons";

// export const Button = ({ children, loading, ...props }) => {
//   return (
//     <button
//       className={cn(
//         "btn btn-sm bg-green-800 flex items-center justify-center gap-2",
//         {
//           "disabled pointer-events-none": loading
//         }
//       )}
//       {...props}
//     >
//       {console.log(className, cn)}
//       {loading && <LoadingOutlined />}
//       {children}
//     </button>
//   );
// };


import { cn } from "@/utils";
import { LoadingOutlined } from "@ant-design/icons";

export const Button = ({ children, loading, ...props }) => {
  const className = cn(
    "btn btn-sm btn-dark flex items-center justify-center gap-2",
    {
      "opacity-50 pointer-events-none": loading,
    }
  );
  console.log(className); // log the generated class name
  return (
    <button className={className} {...props}>
      {loading && <LoadingOutlined />}
      {children}
    </button>
  );
};