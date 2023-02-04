import { memo } from "react";
import { Handle, Position } from "reactflow";

const MainNode = ({ data }) => {
  const isEssentialClass = data.isEssential ? "text-red-500" : "text-gray-500"
  return (
    <div className="px-4 py-2 shadow-md rounded-xl bg-orange-300 border-2" >
      <div className={isEssentialClass}>{data.isEssential ? "필수" : "선택"}</div>
      <div className="flex">
        <div className="ml-2">
          <div className="text-lg font-bold">{data.label}</div>
          <div className="text-gray-500">{data.isComplete ? "Clear" : ""}</div>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} id="sub" />
      <Handle type="source" position={data.direction === "LEFT" ? Position.Left : (data.direction === "MIDDLE" ? Position.Bottom : Position.Right)} id="main" />
      <Handle type="target" position={data.direction === "LEFT" ? Position.Right : (data.direction === "MIDDLE" ? Position.Top : Position.Left)} />
    </div>
  );
};

export default memo(MainNode);