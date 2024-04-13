import React, { useState } from 'react';

import styles from './Default.module.css';
import { IoAddCircleOutline, IoClose } from 'react-icons/io5';

import WidgetComponent from '../WidgetComponent';

// import useSelectWidgets from '../../../../../../hooks/useUserWidgetsFromStorage';
import {
  Widget,
  WidgetKeys,
  WidgetTitle,
} from '../../../../../../state/utils/types';

import userInfo from '../../../../../../state/stores/user-info';

interface DefaultProps {
  onAddWidget: (name: WidgetKeys) => void;
}

const Default: React.FunctionComponent<DefaultProps> = ({ onAddWidget }) => {
  const getNotAddedWidgets = userInfo((state) => state.getNotAddedWidgets);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleClickViewWidget = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleAddWidget = (name: WidgetTitle) => {
    const widgetName = (name.charAt(0).toLowerCase() + name.slice(1)).replace(
      ' ',
      ''
    ) as WidgetKeys;
    onAddWidget(widgetName);
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
    const notAddedWidgets: Widget[] = getNotAddedWidgets();
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
        className={`${styles.closeOptions} ${
          !optionsVisible ? styles.hiddenIcon : ''
        }`}
        onClick={handleClickViewWidget}
      >
        <IoClose />
      </div>
      {optionsVisible ? renderWidgetsOptions() : renderButton()}
    </div>
  );

  return (
    <WidgetComponent
      title="Agrega un Widget"
      body={body}
      path={''}
      isDefault={true}
    />
  );
};

export default Default;
