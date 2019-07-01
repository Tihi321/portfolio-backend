import {__} from '@wordpress/i18n';
import {Fragment} from '@wordpress/element';
import {IconButton, Toolbar} from '@wordpress/components';
import {BlockControls, MediaPlaceholder, MediaUpload} from '@wordpress/editor';
import icons from './icons';

const FileElement = (props) => {
  const {
    placeholderTitle = __('File area', 'portfolio-backend'),
    showToolbar = true,
    toolbarOnTop = true,
    removeBtnStyle = true,
    fileTitle,
    fileUrl,
    fileId,
    className,
    onSelectFile,
    onRemoveFile,
    types = {
      media: ['application', 'image', 'document', 'video', 'audio'],
      upload: 'image/*,video/*,audio/*,document/*',
    },
  } = props;

  const mediaUpload = (
    <MediaUpload
      onSelect={onSelectFile}
      allowedTypes={types.media}
      value={fileId}
      render={({open}) => (
        <IconButton
          className="components-toolbar__control"
          label={__('Edit File', 'portfolio-backend')}
          icon="edit"
          onClick={open}
        />
      )}
    />
  );

  const removeStyles = {
    display: (removeBtnStyle) ? 'flex' : false,
    padding: (removeBtnStyle) ? '12px 8px' : false,
  };

  const removeElement = (
    <button
      className="remove__media-btn"
      style={removeStyles}
      onClick={onRemoveFile}
    >
      {icons.minus}
    </button>
  );

  const renderToolbarEditButton = () => {
    if (toolbarOnTop) {
      return (
        <Fragment>
          <BlockControls>
            <Toolbar>
              {mediaUpload}
            </Toolbar>
          </BlockControls>
          {(onRemoveFile) && removeElement}
        </Fragment>
      );
    }
    return (
      <Fragment>
        {(onRemoveFile) && removeElement}
        {mediaUpload}
      </Fragment>
    );
  };


  const renderFile = () => {
    return (
      <Fragment>
        {(showToolbar) && renderToolbarEditButton()}
        <div className={className}>
          {fileTitle}
        </div>
      </Fragment>
    );

  };

  const renderPlaceholder = () => {
    return (
      <MediaPlaceholder
        icon="format-image"
        labels={{
          title: placeholderTitle,
        }}
        onSelect={onSelectFile}
        accept={types.upload}
        allowedTypes={types.media}
      />
    );
  };

  if (fileUrl) {
    return renderFile();
  }

  return renderPlaceholder();
};

export default FileElement;
