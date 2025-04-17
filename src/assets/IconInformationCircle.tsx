interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const InformationCircle: React.FC<IProps> = ({ width = 25, height = 24, color = "#4299e1" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 4C8.084 4 4.5 7.584 4.5 12C4.5 16.416 8.084 20 12.5 20C16.916 20 20.5 16.416 20.5 12C20.5 7.584 16.916 4 12.5 4ZM12.5 16C12.06 16 11.7 15.64 11.7 15.2V12C11.7 11.56 12.06 11.2 12.5 11.2C12.94 11.2 13.3 11.56 13.3 12V15.2C13.3 15.64 12.94 16 12.5 16ZM13.3 9.6H11.7V8H13.3V9.6Z"
        fill={color}
      />
    </svg>
  );
};

export default InformationCircle;
