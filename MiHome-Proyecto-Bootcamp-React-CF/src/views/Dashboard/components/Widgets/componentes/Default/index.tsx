import React, { useState } from 'react';

import styles from './Default.module.css';
import { IoAddCircleOutline, IoClose } from 'react-icons/io5';

import Widget from '../WidgetComponent';

import useSelectWidgets from '../../../../../../hooks/useUserWidgetsFromStorage';
import { WidgetName } from '../../utils/types';
import { WidgetType } from '../../../../../../utils/types';

interface DefaultProps {
  onAddWidget: (name: WidgetName) => void;
}

const Default: React.FunctionComponent<DefaultProps> = ({ onAddWidget }) => {
  const { getNotAddedWidgets } = useSelectWidgets();
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleClickViewWidget = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleAddWidget = (name: WidgetName) => {
    onAddWidget(name);
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
    const notAddedWidgets: WidgetType[] = getNotAddedWidgets();
    return (
      <div className={styles.containerOptions}>
        {notAddedWidgets.map((widget, index) => (
          <div key={index} className={styles.box}>
            <div className={styles.widgetOptionContainer}>
              <p className={styles.widgetOptionName}>{widget.title}</p>
              <button
                className={styles.widgetOptionAddBtn}
                onClick={() => handleAddWidget(widget.title)}
              >
                Agregar
              </button>
            </div>
          </div>
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

  return <Widget title="Agrega un Widget" body={body} path={'dont'} />;
};

export default Default;
