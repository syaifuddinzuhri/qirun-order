interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ServiceDetail: React.FC<IProps> = ({ width = 25, height = 24, color = "#4299e1" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM16.25 15.75H8.75C8.34 15.75 8 15.41 8 15C8 14.59 8.34 14.25 8.75 14.25H16.25C16.66 14.25 17 14.59 17 15C17 15.41 16.66 15.75 16.25 15.75ZM16.25 9.75H8.75C8.34 9.75 8 9.41 8 9C8 8.59 8.34 8.25 8.75 8.25H16.25C16.66 8.25 17 8.59 17 9C17 9.41 16.66 9.75 16.25 9.75Z"
        fill={color}
      />
    </svg>
  );
};

export default ServiceDetail;
