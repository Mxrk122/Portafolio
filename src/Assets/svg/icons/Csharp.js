import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 478"
      style={{
        enableBackground: 'new 0 0 420 478',
      }}
      xmlSpace="preserve"
      {...props}
      fill={props.fill}
    >
      <path d="M15.73 342.05c-.58-47.3-1.16-94.6-1.73-141.9-.27-22.41-2.7-46.62 3.13-68.52 2.98-11.2 9.6-17.55 19.26-23.42 8.91-5.42 18.09-10.38 27.37-15.12 18.85-9.63 38.15-18.35 56.87-28.24 18.1-9.56 34.48-21.24 51.66-32.27 16.34-10.49 34.33-18.48 53.98-13.12 19.07 5.2 34.69 18.85 50.25 30.37a553.068 553.068 0 0 0 62.73 40.23c19.47 10.71 41.52 19.13 56.5 36.2 4.25 4.85 11.3-2.25 7.07-7.07-13.77-15.7-33.06-24.18-51.14-33.77a553.16 553.16 0 0 1-59.53-36.58c-17.03-12-32.99-26.59-52.23-35.04-18.54-8.14-37.39-7.65-55.75.69-18.96 8.61-35.05 22.59-52.96 33.07-19.3 11.29-39.63 20.65-59.68 30.5-9.63 4.73-19.21 9.57-28.58 14.79-9.17 5.1-19.65 10.26-26.6 18.34-6.73 7.84-9.4 18.03-10.85 28.04-1.68 11.65-1.89 23.38-1.79 35.13.47 55.9 1.36 111.8 2.04 167.7.06 6.42 10.06 6.43 9.98-.01zM17.9 359.05c33.48 26.66 68.79 50.95 105.81 72.43 17.87 10.37 36.18 21.42 55.79 28.2 9.53 3.29 19.82 5.38 29.94 4.57 10.32-.83 19.67-4.68 28.58-9.79 19.6-11.25 38.67-23.55 57.96-35.33 19.81-12.11 39.61-24.21 59.42-36.32 9.43-5.76 18.97-11.37 28.27-17.33 7.22-4.63 14.27-9.92 19-17.21 5.26-8.11 5.87-17.76 5.23-27.15-.77-11.38-1.09-22.07.83-33.4 4.18-24.71 8.62-48.86 9.18-74.01.56-25.21-1.72-50.41-6.5-75.16-1.22-6.31-10.86-3.64-9.64 2.66 8.13 42.07 8.31 85.56.37 127.68-1.87 9.93-4.05 19.84-4.85 29.93-.83 10.49 1.41 20.83.81 31.28-1.12 19.57-22.13 28.42-36.7 37.33-37.07 22.65-74.13 45.31-111.2 67.96-8.82 5.39-17.57 11.52-27.16 15.46-9.48 3.9-19.69 4.4-29.67 2.32-19.7-4.1-37.67-15.08-55.01-24.84a856.488 856.488 0 0 1-113.38-76.35c-4.99-3.97-12.11 3.06-7.08 7.07z" />
      <path d="M273.17 194.16c-15.2-24.7-44.6-40.14-73.69-37.16-28.58 2.93-54.07 22.44-64.62 49.13-10.7 27.09-3.69 59.79 16.1 80.92 21.32 22.76 61.13 34.17 90.49 21.79 7.41-3.12 14.09-7.94 19.07-14.28 2.56-3.25 4.57-6.75 6.07-10.61.57-1.46.93-4.58 2.63-5.08 1.45-.42 5.09 2.31 6.4 2.99 19.86 10.33 39.71 20.65 59.57 30.98-.6-2.28-1.2-4.56-1.79-6.84-25.69 47.45-79.87 69.03-131.48 72.09-13.94.83-27.85.06-41.2-4.28-13.25-4.31-25.41-11.46-37.18-18.78-22.52-14.01-41.95-30.57-51.16-56.2-4.56-12.71-7.17-26.04-9.63-39.28-2.54-13.63-4.48-27.33-3.64-41.23 1.48-24.33 10.76-47.75 24.54-67.69 27.98-40.51 76.24-66.58 125.58-66.79 51.09-.21 101.63 30.58 120.98 78.62.77-1.88 1.53-3.76 2.3-5.65a648.167 648.167 0 0 1-64.9 38.76c-5.71 2.97-.66 11.61 5.05 8.63a647.8 647.8 0 0 0 64.9-38.76c1.67-1.13 3.15-3.54 2.3-5.65-18.29-45.39-61.76-77.86-110.05-84.54-52.5-7.25-107.19 14.83-142.16 54.22-17.45 19.66-30.53 43.66-35.92 69.49-5.97 28.58-.76 57.84 6.09 85.82 3.39 13.84 8.14 27.67 16.12 39.59 7.19 10.73 16.59 19.56 26.85 27.3 22.79 17.2 49.68 33.17 78.54 36.13 16.94 1.73 34.36-.12 51.05-3.14 16.32-2.95 32.27-7.8 47.32-14.81 26.78-12.48 50.21-32.65 64.36-58.78 1.24-2.29.67-5.56-1.79-6.84l-47.31-24.6c-6.71-3.49-14.27-9.01-21.76-10.49-7.07-1.4-11.09 3.41-13.28 9.45-11.34 31.31-53.58 28.68-78.39 16.84-25.54-12.19-41.16-38.2-39.52-66.55 1.54-26.71 20.85-50.34 46.01-58.81 29.2-9.83 62.5 3.09 78.54 29.16 3.35 5.45 12 .43 8.61-5.07z" />
      <path d="M297.24 222.34c21.89 1.77 43.83 2.4 65.79 1.89 6.42-.15 6.45-10.15 0-10-21.95.51-43.9-.11-65.79-1.89-6.41-.52-6.38 9.48 0 10zM297.22 255.53c13.55-.22 27.1-.29 40.65-.2 6.61.05 13.22.13 19.83.25 4.56.09 11.6 1.82 15.28-1.59 1.99-1.84 1.85-5.21 0-7.07l-.26-.26c-1.92-1.93-5.14-1.88-7.07 0-.06.06-.13.12-.19.19-4.61 4.5 2.46 11.57 7.07 7.07.06-.06.13-.12.19-.19h-7.07l.26.26v-7.07l-.33.3c1.18-.49 2.36-.98 3.54-1.46-5.28.62-11.05-.18-16.37-.26a1724.644 1724.644 0 0 0-55.52.03c-6.44.1-6.46 10.1-.01 10z" />
      <path d="M312.25 203.06c-.94 22.09-1.19 44.2-.74 66.31.13 6.43 10.13 6.45 10 0-.45-22.11-.2-44.21.74-66.31.27-6.43-9.73-6.42-10 0zM345.7 203.71c-3.1 22.29-2.82 44.57.93 66.76 1.07 6.33 10.71 3.65 9.64-2.66-3.42-20.28-3.76-41.07-.93-61.45.88-6.29-8.76-9.01-9.64-2.65zM23.08 346.77c.18.58.33 1.18.45 1.78.03.14.05.28.08.42.02.09.03.19.04.28.02.16.03.19.01.08-.01-.11-.01-.08.01.08l.03.28c.01.14.03.28.04.42.04.61.06 1.22.03 1.83-.01.28-.03.56-.05.84-.01.14-.03.28-.04.42-.02.18-.02.19 0 .02-.01.09-.03.19-.04.28-.12.77.19 1.65 1.05 1.85.72.16 1.72-.22 1.85-1.05.43-2.79.28-5.62-.56-8.32-.23-.75-1.06-1.3-1.85-1.05-.75.23-1.3 1.03-1.05 1.84zM29.75 345.3c.76 4.79 1.7 9.56 2.83 14.28.45 1.88 3.34 1.08 2.89-.8-1.13-4.72-2.07-9.48-2.83-14.28-.13-.8-1.13-1.25-1.85-1.05-.84.24-1.16 1.05-1.04 1.85zM41.49 337.51c1.53 9.05 3.24 18.07 5.11 27.05.39 1.89 3.29 1.09 2.89-.8-1.87-8.99-3.58-18.01-5.11-27.05-.32-1.89-3.21-1.09-2.89.8zM51.65 327.62c1.59 14.81 3.54 29.57 5.86 44.28.3 1.9 3.19 1.09 2.89-.8-2.28-14.44-4.2-28.94-5.76-43.48-.2-1.9-3.2-1.92-2.99 0zM62.57 329.5c3.88 14.85 2.62 30.44 6.03 45.37.95 4.15 2.3 8.19 4.12 12.04.82 1.74 3.41.22 2.59-1.51-6.5-13.76-5.78-29.42-7.58-44.19-.51-4.21-1.2-8.39-2.28-12.5-.48-1.87-3.37-1.08-2.88.79zM77.31 342.64c3.11 18.38 8.77 36.25 16.75 53.09.83 1.74 3.41.22 2.59-1.51-7.86-16.6-13.38-34.27-16.44-52.38-.33-1.9-3.22-1.09-2.9.8zM97.19 357.94c2.81 18.14 5.76 36.48 13.56 53.26.81 1.75 3.4.23 2.59-1.51-7.68-16.51-10.5-34.7-13.26-52.54-.29-1.91-3.18-1.1-2.89.79zM114.22 368.6c1.5 14.74 5.68 29.08 12.36 42.31.87 1.72 3.46.21 2.59-1.51-6.42-12.73-10.5-26.61-11.95-40.8-.19-1.9-3.19-1.92-3 0zM131.54 383.52c3.25 14.13 6.52 28.3 11.63 41.89.67 1.79 3.57 1.01 2.89-.8-5.11-13.6-8.39-27.76-11.63-41.89-.42-1.88-3.32-1.08-2.89.8zM147.55 388.7a113.57 113.57 0 0 0 15.64 41.4c2.22 3.55 4.64 6.95 7.23 10.24 1.19 1.52 3.3-.62 2.12-2.12-8.9-11.31-15.52-24.4-19.42-38.24-1.12-3.97-2.01-8-2.68-12.07-.31-1.91-3.2-1.1-2.89.79zM169.17 393.46c.44 4.73 1.55 9.33 2.85 13.89 1.22 4.28 2.47 8.55 3.87 12.78 2.67 8.1 6.06 15.97 11.41 22.68 1.2 1.51 3.31-.63 2.12-2.12-5.09-6.39-8.25-14.05-10.77-21.76-1.29-3.94-2.46-7.93-3.6-11.91-1.28-4.44-2.44-8.93-2.87-13.55-.19-1.92-3.19-1.94-3.01-.01zM191.59 398.5c3.64 15.51 7.49 31.47 16.67 44.78 1.09 1.58 3.69.08 2.59-1.51-9.04-13.11-12.78-28.79-16.37-44.07-.44-1.87-3.33-1.08-2.89.8zM210.22 399.29c-.04 6.97 3.14 13.8 5.66 20.16 2.61 6.6 5.47 13.1 8.57 19.49.84 1.74 3.43.22 2.59-1.51-2.98-6.16-5.75-12.42-8.27-18.78-1.23-3.12-2.43-6.26-3.53-9.43-1.12-3.22-2.04-6.5-2.03-9.94.02-1.92-2.98-1.92-2.99.01zM221 400.51a179.29 179.29 0 0 0 12.92 32.43c.89 1.72 3.48.2 2.59-1.51a175.53 175.53 0 0 1-12.62-31.71c-.53-1.86-3.43-1.08-2.89.79zM234.69 392.3c3.8 12.38 8.33 24.53 13.52 36.39.77 1.76 3.36.24 2.59-1.51a330.351 330.351 0 0 1-13.21-35.68c-.57-1.83-3.46-1.05-2.9.8zM254.34 386.89c5.71 12.44 13.17 24.01 22.1 34.38 1.26 1.47 3.38-.66 2.12-2.12-8.76-10.18-16.03-21.57-21.63-33.77-.81-1.75-3.39-.23-2.59 1.51zM274.19 383.92c3.92 7.89 8.4 15.49 13.42 22.73 1.09 1.58 3.69.08 2.59-1.51-5.02-7.24-9.5-14.84-13.42-22.73-.86-1.74-3.45-.22-2.59 1.51zM285.15 370.74c6.54 9.05 13.09 18.09 19.63 27.14 1.12 1.55 3.72.05 2.59-1.51-6.54-9.05-13.09-18.09-19.63-27.14-1.12-1.55-3.73-.06-2.59 1.51zM301.34 362.38c6.59 6.58 12.64 13.67 18.07 21.24 1.12 1.55 3.72.06 2.59-1.51a175.66 175.66 0 0 0-18.54-21.85c-1.37-1.37-3.49.75-2.12 2.12zM315.14 354.66c4.89 7.63 10.84 14.55 17.69 20.48 1.45 1.26 3.58-.85 2.12-2.12a91.593 91.593 0 0 1-17.22-19.88c-1.04-1.62-3.64-.12-2.59 1.52zM330.3 342.68c2.36 1.67 4.28 3.86 6.16 6.04 1.87 2.16 3.76 4.27 5.81 6.27a84.41 84.41 0 0 0 13.61 10.74c1.63 1.04 3.14-1.56 1.51-2.59-4.93-3.13-9.5-6.77-13.63-10.89-4.02-4-7.28-8.85-11.95-12.15-1.57-1.13-3.08 1.47-1.51 2.58zM341.85 327.7c10.93 10.14 23.3 18.67 36.69 25.24 1.73.85 3.25-1.74 1.51-2.59a150.747 150.747 0 0 1-36.08-24.77c-1.42-1.31-3.54.81-2.12 2.12zM156.48 262.85c1.67 4.93 3.33 9.86 5 14.79.62 1.82 3.51 1.04 2.89-.8-1.67-4.93-3.33-9.86-5-14.79-.62-1.82-3.51-1.04-2.89.8zM165.31 261.85c.63.21.89 1.3 1.1 1.85.39 1.05.78 2.11 1.17 3.17.73 1.96 1.45 3.92 2.18 5.88 1.51 4.07 3.01 8.14 4.52 12.21.66 1.79 3.57 1.02 2.89-.8-1.73-4.67-3.46-9.35-5.19-14.02-.84-2.26-1.67-4.52-2.51-6.79-.68-1.85-1.33-3.72-3.36-4.4-1.84-.6-2.62 2.29-.8 2.9zM175.35 257.77c4.34 11.55 10.08 22.51 17.16 32.61 1.1 1.57 3.7.07 2.59-1.51-6.93-9.88-12.62-20.6-16.86-31.9-.67-1.79-3.57-1.01-2.89.8zM189.9 249.46a340.332 340.332 0 0 0 31.42 43.38c1.25 1.47 3.37-.66 2.12-2.12a334.041 334.041 0 0 1-30.95-42.78c-1-1.64-3.59-.13-2.59 1.52zM210.46 248.68a130.135 130.135 0 0 0 28.66 35.83c1.45 1.27 3.58-.85 2.12-2.12a127.358 127.358 0 0 1-28.19-35.23c-.92-1.69-3.51-.18-2.59 1.52zM227.15 243l20.6 30.83c1.07 1.6 3.67.1 2.59-1.51l-20.6-30.83c-1.07-1.6-3.67-.1-2.59 1.51zM245.86 233.53c2.48 9.34 6.7 18.17 12.42 25.95 1.13 1.54 3.74.04 2.59-1.51a74.943 74.943 0 0 1-12.12-25.23c-.49-1.88-3.38-1.08-2.89.79zM260.69 225.5c5.63 14.21 11.36 28.68 20.44 41.1 2.53 3.46 5.29 6.74 8.33 9.77 1.37 1.36 3.49-.76 2.12-2.12-10.58-10.55-17.43-24.03-23.18-37.65-1.66-3.94-3.24-7.92-4.82-11.89-.7-1.78-3.61-1.01-2.89.79zM328.41 280.74c4.04 7.12 8.47 14 13.29 20.62 1.13 1.55 3.73.05 2.59-1.51-4.82-6.62-9.25-13.5-13.29-20.62-.96-1.68-3.55-.17-2.59 1.51zM350.95 291.42c2.89 6.29 6.28 12.33 10.16 18.06 1.91 2.82 3.93 5.58 6.07 8.23 1.81 2.25 3.95 4.37 6.86 5.02 1.88.42 2.68-2.47.8-2.89-2.75-.62-4.54-2.97-6.19-5.07-2.01-2.56-3.91-5.21-5.7-7.92-3.57-5.39-6.7-11.06-9.41-16.94-.8-1.76-3.39-.23-2.59 1.51zM368.95 288.29a184.45 184.45 0 0 0 19.5 26.1c1.29 1.44 3.41-.69 2.12-2.12a179.762 179.762 0 0 1-19.03-25.49c-1.01-1.64-3.61-.14-2.59 1.51zM377.78 269.97c4.03 7.08 9.47 13.22 15.93 18.17.64.49 1.68.1 2.05-.54.45-.77.11-1.56-.54-2.05-6.04-4.62-11.09-10.49-14.85-17.09-.96-1.68-3.55-.17-2.59 1.51zM383.52 250.18c3.12 8.63 8.34 16.39 15.22 22.45 1.44 1.27 3.57-.84 2.12-2.12-6.49-5.72-11.51-12.98-14.45-21.13-.65-1.8-3.55-1.02-2.89.8zM384.17 231.1c.96 7.05 7.13 11.61 10.32 17.59.91 1.7 3.5.19 2.59-1.51-3.04-5.72-9.1-10.15-10.02-16.87-.11-.8-1.14-1.24-1.85-1.05-.86.24-1.15 1.04-1.04 1.84zM364.29 232.15c2.21 2.77 4.54 5.44 6.99 8 .54.57 1.58.59 2.12 0 .56-.61.58-1.51 0-2.12-2.45-2.56-4.78-5.23-6.99-8-.49-.62-1.62-.55-2.12 0-.6.66-.53 1.47 0 2.12zM348.57 173.71a294.036 294.036 0 0 0 34.03 34.76c3.52 3.05 7.12 6.01 10.79 8.89 1.5 1.18 3.64-.93 2.12-2.12a294.626 294.626 0 0 1-35.65-33.1 297.22 297.22 0 0 1-9.17-10.55c-1.23-1.49-3.34.64-2.12 2.12zM362.78 166.38c9.71 11.25 20.7 21.31 32.73 30.04 1.56 1.14 3.06-1.47 1.51-2.59-11.81-8.57-22.59-18.52-32.12-29.57-1.27-1.47-3.38.66-2.12 2.12zM375.76 155.79a89.372 89.372 0 0 0 18.08 18.46c.65.49 1.68.1 2.05-.54.45-.77.11-1.56-.54-2.05a83.907 83.907 0 0 1-17.01-17.38c-.48-.65-1.3-.98-2.05-.54-.64.38-1.01 1.4-.53 2.05zM384.01 147.34l10.9 12.85c.52.62 1.58.54 2.12 0 .61-.61.53-1.5 0-2.12l-10.9-12.85c-.52-.62-1.58-.54-2.12 0-.61.61-.53 1.5 0 2.12zM392.15 144.34c1.81 2.33 3.61 4.67 5.42 7 .22.28.72.44 1.06.44.37 0 .81-.16 1.06-.44.61-.66.52-1.46 0-2.12-1.81-2.33-3.61-4.67-5.42-7-.22-.28-.72-.44-1.06-.44-.37 0-.81.16-1.06.44-.61.66-.52 1.46 0 2.12zM330.45 178.57c4.16 3.39 8.49 6.57 12.97 9.53.68.45 1.66.13 2.05-.54.43-.73.14-1.61-.54-2.05-4.27-2.81-8.4-5.83-12.36-9.06-.63-.51-1.51-.61-2.12 0-.53.52-.63 1.6 0 2.12zM270.27 218.04c4.3 8.6 8.95 17.01 13.96 25.21 1 1.65 3.6.14 2.59-1.51-5-8.21-9.66-16.62-13.96-25.21-.86-1.73-3.45-.21-2.59 1.51z" />
    </svg>
  )
}

export default SvgComponent
