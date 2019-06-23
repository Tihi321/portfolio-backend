const RowContainer = (props) => {
  const {
    className = '',
    align = 'right',
    children,
  } = props;

  return (
    <div
      className={`pb__row-container pb__row-container--${align} ${className}`}
    >
      {children}
    </div>
  );
};

export default RowContainer;
