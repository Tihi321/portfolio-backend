const MenuItem = (props) => {
  const {
    title = '',
    active = false,
    onClick,
  } = props;

  const menuItemClasses = (active) ? 'topbar__menu-button active' : 'topbar__menu-button';

  return (
    <button
      className={menuItemClasses}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MenuItem;
