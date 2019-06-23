const InputLabel = (props) => {
  const {
    message = '',
    helper = '',
  } = props;

  return (
    <div className="options__label">
      {message}
      <span className="options__label-helper">
        {helper}
      </span>
    </div>
  );
};

export default InputLabel;
