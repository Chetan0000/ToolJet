import React from 'react';

const Shield = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.83248 5.49975L10.8708 3.15326C11.9134 2.66767 13.1036 2.66766 14.1462 3.15325L19.1646 5.49045C20.6321 6.17391 21.5953 7.71001 21.4925 9.38938C21.0981 15.831 19.3406 18.743 14.5899 22.1213C13.3361 23.0129 11.6823 23.0107 10.4276 22.1206C5.6914 18.7605 3.86871 15.8891 3.50617 9.36679C3.41343 7.69845 4.37515 6.17848 5.83248 5.49975ZM12.5 14.7891C13.6046 14.7891 14.5 13.8936 14.5 12.7891C14.5 11.6845 13.6046 10.7891 12.5 10.7891C11.3954 10.7891 10.5 11.6845 10.5 12.7891C10.5 13.8936 11.3954 14.7891 12.5 14.7891Z"
      fill={fill}
    />
  </svg>
);

export default Shield;