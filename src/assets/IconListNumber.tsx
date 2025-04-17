interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ListNumber: React.FC<IProps> = ({ width = 32, height = 32, color = "#4299e1" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8004 10.6668H25.6004C26.1871 10.6668 26.6671 10.1868 26.6671 9.60013C26.6671 9.01346 26.1871 8.53346 25.6004 8.53346H12.8004C12.2137 8.53346 11.7337 9.01346 11.7337 9.60013C11.7337 10.1868 12.2137 10.6668 12.8004 10.6668ZM25.6004 21.3335H12.8004C12.2137 21.3335 11.7337 21.8135 11.7337 22.4001C11.7337 22.9868 12.2137 23.4668 12.8004 23.4668H25.6004C26.1871 23.4668 26.6671 22.9868 26.6671 22.4001C26.6671 21.8135 26.1871 21.3335 25.6004 21.3335ZM25.6004 14.9335H12.8004C12.2137 14.9335 11.7337 15.4135 11.7337 16.0001C11.7337 16.5868 12.2137 17.0668 12.8004 17.0668H25.6004C26.1871 17.0668 26.6671 16.5868 26.6671 16.0001C26.6671 15.4135 26.1871 14.9335 25.6004 14.9335ZM9.06706 20.2668H6.93372C6.63506 20.2668 6.40039 20.5015 6.40039 20.8001C6.40039 21.0988 6.63506 21.3335 6.93372 21.3335H8.53372V21.8668H8.00039C7.70172 21.8668 7.46706 22.1015 7.46706 22.4001C7.46706 22.6988 7.70172 22.9335 8.00039 22.9335H8.53372V23.4668H6.93372C6.63506 23.4668 6.40039 23.7015 6.40039 24.0001C6.40039 24.2988 6.63506 24.5335 6.93372 24.5335H9.06706C9.36572 24.5335 9.60039 24.2988 9.60039 24.0001V20.8001C9.60039 20.5015 9.36572 20.2668 9.06706 20.2668ZM6.93372 8.53346H7.46706V11.2001C7.46706 11.4988 7.70172 11.7335 8.00039 11.7335C8.29906 11.7335 8.53372 11.4988 8.53372 11.2001V8.00013C8.53372 7.70146 8.29906 7.4668 8.00039 7.4668H6.93372C6.63506 7.4668 6.40039 7.70146 6.40039 8.00013C6.40039 8.2988 6.63506 8.53346 6.93372 8.53346ZM9.06706 13.8668H6.93372C6.63506 13.8668 6.40039 14.1015 6.40039 14.4001C6.40039 14.6988 6.63506 14.9335 6.93372 14.9335H8.32039L6.52839 17.0241C6.44306 17.1201 6.40039 17.2481 6.40039 17.3655V17.6001C6.40039 17.8988 6.63506 18.1335 6.93372 18.1335H9.06706C9.36572 18.1335 9.60039 17.8988 9.60039 17.6001C9.60039 17.3015 9.36572 17.0668 9.06706 17.0668H7.68039L9.47239 14.9761C9.55772 14.8801 9.60039 14.7521 9.60039 14.6348V14.4001C9.60039 14.1015 9.36572 13.8668 9.06706 13.8668Z"
        fill={color}
      />
    </svg>
  );
};

export default ListNumber;
