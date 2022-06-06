import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 478"
      xmlSpace="preserve"
      {...props}
      fill={props.fill}
    >
      <path d="M149.29 240.55c-17.21 1.5-36.31 5.36-51.36 14.28-5.72 3.39-10.73 9.46-8.34 16.48 2.57 7.55 11.98 11.19 19.03 12.93 18.34 4.55 38.66 2.55 57.34 1.84 19.67-.75 39.35-1.51 58.97-3.1 22.27-1.81 44.47-4.71 66.27-9.67 6.27-1.43 3.62-11.07-2.66-9.64-32.63 7.43-66.01 9.98-99.36 11.48-16.39.74-32.83 1.6-49.25 1.62-8.09.01-16.42.04-24.42-1.3-3.68-.61-19.75-4.06-15.43-9.8 2.22-2.95 7.49-4.55 10.74-5.87 3.86-1.57 7.8-2.95 11.79-4.15a132.6 132.6 0 0 1 26.69-5.11c6.35-.54 6.41-10.55-.01-9.99zM91.53 289.67c10.57 36.4 22.09 72.52 34.54 108.32 2.1 6.04 11.77 3.44 9.64-2.66-12.46-35.8-23.97-71.92-34.54-108.32-1.79-6.16-11.44-3.54-9.64 2.66zM146.75 407.15c23.26 4.36 47 5.63 70.56 3.35 11.35-1.1 22.65-2.92 33.76-5.54 10.88-2.56 22.16-5.45 31.54-11.75 5.31-3.57.31-12.24-5.05-8.63-8.7 5.84-19.08 8.37-29.16 10.75-10.85 2.56-21.87 4.37-32.97 5.35-22.05 1.96-44.28.91-66.03-3.17-6.29-1.18-8.98 8.45-2.65 9.64zM304.63 342.74c19.55-13.56 40.17-28.41 48.48-51.76 3.9-10.96 2.7-21.76-5.87-30.03-8.07-7.78-19.05-11.8-30.2-11.55-6.42.15-6.45 10.15 0 10 8.8-.2 17.46 2.81 23.7 9.17 7.46 7.59 4.36 17.63-.08 26.06-9.07 17.24-25.47 28.65-41.08 39.48-5.25 3.64-.26 12.31 5.05 8.63zM122.41 319.35c4.73-5.48 9.46-10.95 14.19-16.43 1.26-1.45-.86-3.59-2.12-2.12-4.73 5.48-9.46 10.95-14.19 16.43-1.26 1.46.85 3.59 2.12 2.12zM127.04 332.84c8.66-9.49 17.46-18.85 26.41-28.08 1.34-1.39-.77-3.51-2.12-2.12-8.94 9.23-17.75 18.58-26.41 28.08-1.31 1.43.81 3.55 2.12 2.12zM133.99 350.68a451.674 451.674 0 0 0 32.89-43.89c1.06-1.62-1.53-3.12-2.59-1.51a442.002 442.002 0 0 1-32.42 43.29c-1.25 1.45.87 3.58 2.12 2.11zM147.94 372.58A1537.299 1537.299 0 0 1 192 314.09c1.19-1.5-.92-3.64-2.12-2.12a1539.306 1539.306 0 0 0-34.94 45.87c-3.22 4.39-6.41 8.8-9.58 13.22-1.14 1.57 1.46 3.07 2.58 1.52zM157.63 385.98c14.96-19.6 30.26-38.94 45.88-58.01 4.44-5.42 8.91-10.83 13.41-16.21 1.23-1.47-.88-3.61-2.12-2.12a2185.397 2185.397 0 0 0-46.98 58.25c-4.28 5.5-8.54 11.03-12.78 16.57-1.17 1.54 1.44 3.04 2.59 1.52zM186.74 384.37l52.47-63.99c4.95-6.04 9.9-12.08 14.86-18.12 1.21-1.48-.9-3.62-2.12-2.12l-52.47 63.99c-4.95 6.04-9.9 12.08-14.86 18.12-1.21 1.48.9 3.62 2.12 2.12zM217.68 383.99a1062.581 1062.581 0 0 0 51.61-66.8c1.12-1.58-1.48-3.08-2.59-1.51a1050.276 1050.276 0 0 1-39.38 51.92c-3.88 4.79-7.8 9.55-11.75 14.27-1.25 1.47.86 3.61 2.11 2.12zM247.23 381.35c9.45-13.07 18.1-26.71 25.89-40.83.93-1.69-1.66-3.21-2.59-1.51a397.031 397.031 0 0 1-25.89 40.83c-1.13 1.56 1.47 3.06 2.59 1.51zM268.49 374.53c4.38-5.37 7.91-11.3 10.57-17.7.31-.75-.34-1.65-1.05-1.85-.86-.24-1.53.3-1.85 1.05a66.284 66.284 0 0 1-9.8 16.37c-.51.63-.61 1.51 0 2.12.53.54 1.61.64 2.13.01z" />
      <path d="M85.75 371.37c-8.94 4.82-19.68 10.79-25.74 19.21-5.75 8-3.54 18.2 3.77 24.4 8.4 7.13 21.15 8.7 31.58 10.84 11.6 2.38 23.33 4.15 35.1 5.41 48.37 5.2 97.26 1.09 144.97-7.66 27.51-5.04 54.7-11.68 81.69-19.01 6.2-1.68 3.57-11.33-2.66-9.64-83.9 22.79-172.81 39.14-259.22 20.67-8.02-1.72-27.62-3.51-28.58-14.39-.45-5.11 5.25-8.91 8.86-11.58 4.85-3.59 9.97-6.76 15.28-9.62 5.67-3.05.62-11.69-5.05-8.63zM192.67 241.87c-25.32-20.44-46.44-52.96-31.91-86.07 6.23-14.2 16.52-26.17 23.07-40.2 6.98-14.95 9.43-32.05 4.95-48.11-4.31-15.45-15.19-28.98-29.8-35.74-5.8-2.69-10.89 5.93-5.05 8.63 13.29 6.15 22.59 18.1 25.85 32.33 3.86 16.83-1.32 33.24-9.86 47.7-7.76 13.14-17.36 25.54-21.59 40.43-4.46 15.7-2.2 32.52 4.25 47.33 7.1 16.27 19.32 29.72 33.01 40.77 4.97 4.01 12.09-3.03 7.08-7.07zM233.15 257.48c8.87-10.56 15.48-23.83 14.8-37.95-.67-14.16-9.03-25.43-15.32-37.56-3.46-6.67-5.63-13.47-5.39-21.07.26-8.12 2.9-16.04 5.91-23.51 6.45-15.97 14.22-31.51 21.38-47.17 2.66-5.81-5.96-10.9-8.63-5.05-6.96 15.23-14.27 30.36-20.81 45.78-5.8 13.65-10.33 28.62-6.28 43.43 3.54 12.92 12.86 23.12 17.18 35.66 4.95 14.4-.46 29.13-9.91 40.37-4.12 4.89 2.92 12 7.07 7.07z" />
    </svg>
  )
}

export default SvgComponent
