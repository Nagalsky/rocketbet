export default function Header({ ...restProps }) {
  return (
    <>
      <header {...restProps}>
        <div className="container">
          <p>IM a header</p>
        </div>
      </header>
    </>
  );
}
