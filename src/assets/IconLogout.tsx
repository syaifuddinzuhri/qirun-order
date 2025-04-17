interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Logout: React.FC<IProps> = ({ width = 24, height = 25, color = "#26334D" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 9.95038V14.8152C3.5 17.1086 3.5 18.2552 4.22161 18.9677C4.87719 19.6149 5.89578 19.6741 7.81846 19.6796C7.71686 19.0052 7.69563 18.1996 7.69029 17.2517C7.68802 16.8487 8.01709 16.5202 8.42529 16.518C8.83348 16.5157 9.16624 16.8406 9.16851 17.2436C9.17451 18.3076 9.20249 19.0617 9.30898 19.634C9.41158 20.1855 9.57634 20.5047 9.81626 20.7416C10.089 21.0109 10.4719 21.1865 11.1951 21.2825C11.9395 21.3813 12.9261 21.3828 14.3407 21.3828H15.3262C16.7407 21.3828 17.7273 21.3813 18.4717 21.2825C19.1949 21.1865 19.5778 21.0109 19.8505 20.7416C20.1233 20.4723 20.3011 20.0943 20.3983 19.3803C20.4984 18.6454 20.5 17.6713 20.5 16.2747V8.49092C20.5 7.0943 20.4984 6.12024 20.3983 5.38531C20.3011 4.67136 20.1233 4.29329 19.8505 4.02401C19.5778 3.75473 19.1949 3.57916 18.4717 3.48317C17.7273 3.38436 16.7407 3.38281 15.3262 3.38281H14.3407C12.9261 3.38281 11.9395 3.38436 11.1951 3.48317C10.4719 3.57916 10.089 3.75473 9.81626 4.02401C9.57634 4.26089 9.41158 4.58009 9.30898 5.13158C9.20249 5.70393 9.17451 6.45807 9.16851 7.52201C9.16624 7.92502 8.83348 8.24991 8.42529 8.24767C8.01709 8.24542 7.68802 7.9169 7.69029 7.51389C7.69563 6.56603 7.71686 5.76039 7.81846 5.08606C5.89578 5.09148 4.87719 5.15071 4.22161 5.79796C3.5 6.5104 3.5 7.65706 3.5 9.95038ZM5.93385 12.8988C5.6452 12.6138 5.6452 12.1518 5.93385 11.8668L7.90484 9.92087C8.19348 9.63589 8.66147 9.63589 8.95011 9.92087C9.23876 10.2058 9.23876 10.6679 8.95011 10.9529L8.24088 11.6531L15.3259 11.6531C15.7341 11.6531 16.0651 11.9798 16.0651 12.3828C16.0651 12.7858 15.7341 13.1125 15.3259 13.1125L8.24088 13.1125L8.95011 13.8128C9.23876 14.0977 9.23876 14.5598 8.95011 14.8448C8.66147 15.1297 8.19348 15.1297 7.90484 14.8448L5.93385 12.8988Z"
        fill={color}
      />
    </svg>
  );
};

export default Logout;
