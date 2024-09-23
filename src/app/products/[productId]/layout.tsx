export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main> {children}</main>
        <h2>Features products</h2>
      </body>
    </html>
  );
}
