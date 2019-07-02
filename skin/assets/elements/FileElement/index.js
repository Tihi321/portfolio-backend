import {__} from '@wordpress/i18n';
import {Fragment} from '@wordpress/element';
import {IconButton, Toolbar} from '@wordpress/components';
import {BlockControls, MediaPlaceholder, MediaUpload} from '@wordpress/editor';
import icons from './icons';

const FileElement = (props) => {
  const {
    placeholderTitle = __('File upload', 'portfolio-backend'),
    placeholderInstruction = __('Choose a video file from library', 'portfolio-backend'),
    showToolbar = true,
    toolbarOnTop = true,
    iconButton = true,
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
      render={({open}) => {
        if (iconButton) {
          return (
            <IconButton
              className="components-toolbar__control"
              label={__('Edit File', 'portfolio-backend')}
              icon="edit"
              onClick={open}
            />
          );
        }
        return (
          <button
            className="components-button edit__media-btn"
            onClick={open}
          >
            {__('Edit', 'portfolio-backend')}
          </button>
        );
      }}
    />
  );

  const removeStyles = {
    display: (iconButton) ? 'flex' : false,
    padding: (iconButton) ? '12px 8px' : false,
  };

  const removeElement = (
    <button
      className="components-button remove__media-btn"
      style={removeStyles}
      onClick={onRemoveFile}
    >
      {(iconButton) ? icons.minus : __('Remove', 'portfolio-backend')}
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
        {mediaUpload}
        {(onRemoveFile) && removeElement}
      </Fragment>
    );
  };


  const renderFile = () => {
    return (
      <Fragment>
        <div className={className}>
          <div className="file__row">
            <span
              className="file__title"
            >
              {__('Title', 'portfolio-backend')}:
            </span>
            {fileTitle}
          </div>
          <div className="file__row">
            <span
              className="file__title"
            >
              {__('Url', 'portfolio-backend')}:
            </span>
            {fileUrl}
          </div>
        </div>
        {(showToolbar) && renderToolbarEditButton()}
      </Fragment>
    );

  };

  const renderPlaceholder = () => {
    return (
      <MediaPlaceholder
        labels={{
          title: placeholderTitle,
          instructions: placeholderInstruction,
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
