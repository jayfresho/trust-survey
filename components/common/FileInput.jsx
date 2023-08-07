import React from "react";

const FileInput = ({
  id,
  title,
  type,
  name,
  error,
  handleFileChange,
  required,
  max,
}) => {
  return (
    <div className="shadow-md mb-4">
      <label
        htmlFor={id}
        className="inline-block w-full bg-color-primary text-white pl-[20px] py-[10px]"
      >
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={(e) => handleFileChange(e)}
        required={required}
        title="Upload Image"
        accept=".jpg,.jpeg,.png,.svg"
        max={max}
        className="block w-[94%] mx-auto mt-[15px] px-[5px] border-none outline-none"
      />
      <div className="pb-[20px] pl-[4%] text-[12px]">
        <p className="my-1">
          *Maximum allowed image size is <span className="font-bold">5MB</span>
          (.jpg,.jpeg,.png,.svg)
        </p>
        {required ? (
          <div>
            {error ? (
              <p className="text-red-600">{error}</p>
            ) : (
              <p className="bg-gray-200 w-max text-[12px] px-2 py-1 rounded-[10px]">
                Required
              </p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FileInput;
