import "../styles/globals.css";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Miltonian&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
