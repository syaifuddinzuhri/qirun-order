interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Payment: React.FC<IProps> = ({ width = 24, height = 24, color = "#4299e1" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M22 7.5499C22 8.2099 21.46 8.7499 20.8 8.7499H3.2C2.54 8.7499 2 8.2099 2 7.5499V7.5399C2 5.2499 3.85 3.3999 6.14 3.3999H17.85C20.14 3.3999 22 5.2599 22 7.5499Z"
        fill={color}
      />
      <path
        d="M2 11.45V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.45C22 10.79 21.46 10.25 20.8 10.25H3.2C2.54 10.25 2 10.79 2 11.45ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Payment;
