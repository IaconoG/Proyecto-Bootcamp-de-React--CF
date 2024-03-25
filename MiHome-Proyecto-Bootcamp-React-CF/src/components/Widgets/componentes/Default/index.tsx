import React, { useState } from 'react';

import styles from './Default.module.css';
import { IoAddCircleOutline, IoClose } from 'react-icons/io5';

import Widget from '../WidgetComponent';
import Box from '../../../Box';

import useSelectWidgets from '../../../../hooks/useSelectWidgets';
import { WidgetName } from '../../../../utils/types';

interface DefaultProps {
  onAddWidget: (name: WidgetName) => void;
}

const Default: React.FunctionComponent<DefaultProps> = ({ onAddWidget }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const { getNotAddedWidgets } = useSelectWidgets();

  const handleClickViewWidget = () => {
    setOptionsVisible(!optionsVisible);
  };

  const renderButton = () => {
    return (
      <div className={styles.addButton} onClick={handleClickViewWidget}>
        <IoAddCircleOutline />
      </div>
    );
  };

  const renderWidgetsOptions = () => {
    const notAddedWidgets = getNotAddedWidgets();
    return (
      <div className={styles.containerOptions}>
        {notAddedWidgets.map((widget, index) => (
          <Box key={index}>
            <div className={styles.widgetOptionContainer}>
              <p className={styles.widgetOptionName}>{widget.name}</p>
              <button
                className={styles.widgetOptionAddBtn}
                onClick={() => onAddWidget(widget.name)}
              >
                Agregar
              </button>
            </div>
          </Box>
        ))}
      </div>
    );
  };

  const body: React.ReactElement = (
    <div className={styles.container}>
      <div
        className={`${styles.closeOptions} ${!optionsVisible ? styles.hiddenIcon : ''}`}
        onClick={handleClickViewWidget}
      >
        <IoClose />
      </div>
      {optionsVisible ? renderWidgetsOptions() : renderButton()}
    </div>
  );

  return <Widget title="Agrega un Widget" body={body} path={'default'} />;
};

export default Default;
