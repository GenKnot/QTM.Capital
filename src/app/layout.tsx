
import "../styles/index.css";

export const metadata = {
  title: 'QTM - Next.js Template',
  description: 'A modern Next.js template with beautiful UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Unbounded:wght@200..900&display=swap" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
