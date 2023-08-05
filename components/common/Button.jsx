"use client";

const Button = ({
  children,
  handleClick = () => {},
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`font-[700] rounded-[8px] text-[13px] bg-black-cus-1 dark:bg-white-cus-1 px-[16px] py-[10px] dark:text-black-cus-1 text-white-cus-1 border-none hover:text-color-secondary`}
    >
      {children}
    </button>
  );
};

export default Button;
