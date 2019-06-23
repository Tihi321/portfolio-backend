const MenuItem = (props) => {
  const {
    data = '',
    title = '',
    active = false,
    onClick,
  } = props;

  const menuItemClasses = (active) ? 'topbar__menu-button active' : 'topbar__menu-button';

  return (
    <button
      className={menuItemClasses}
      data-page={data}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MenuItem;
