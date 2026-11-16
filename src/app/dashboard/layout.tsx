
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body suppressHydrationWarning>
     
        {children}
      
      </body>
    </html>
  );
}
