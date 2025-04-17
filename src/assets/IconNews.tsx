interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const News: React.FC<IProps> = ({ width = 24, height = 24, color = "#4299e1" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4V7H21C21.5523 7 22 7.44772 22 8V18C22 19.6569 20.6569 21 19 21H17H5C3.34315 21 2 19.6569 2 18V4C2 3.44772 2.44772 3 3 3H17C17.5523 3 18 3.44772 18 4ZM20 18C20 18.5523 19.5523 19 19 19C18.4477 19 18 18.5523 18 18V9H20V18ZM6 8C6 7.44772 6.44772 7 7 7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H7C6.44772 9 6 8.55228 6 8ZM8 12C8 11.4477 8.44772 11 9 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H9C8.44772 13 8 12.5523 8 12Z"
        fill={color}
      />
    </svg>
  );
};

export default News;
