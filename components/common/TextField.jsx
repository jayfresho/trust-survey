"use client";

const TextField = ({
  id,
  title,
  type,
  name,
  value,
  handleTextFieldChange,
  required,
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
        value={value}
        onChange={(e) => handleTextFieldChange(e)}
        required={required}
        className="block w-[94%] mx-auto mt-[15px] px-[5px] border-b border-[rgba(0,0,0,0.2)] outline-none"
      />
      <div className="py-[20px] pl-[4%]">
        {required ? (
          <p className="bg-gray-200 w-max text-[12px] px-2 py-1 rounded-[10px]">
            Required
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default TextField;
