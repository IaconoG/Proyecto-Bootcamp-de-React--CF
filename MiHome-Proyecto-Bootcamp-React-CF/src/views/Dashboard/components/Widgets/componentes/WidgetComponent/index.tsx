import React from 'react';
import { Link } from 'react-router-dom';

import { WidgetTitle, WidgetPath } from '../../../../../../state/utils/types';

import styles from './Widget.module.css';
import { IoExpand } from 'react-icons/io5';

interface WidgetDefaultProps {
  title: WidgetTitle;
  body: React.ReactElement;
  path: WidgetPath;
  isDefault?: boolean;
}

const WidgetComponent: React.FunctionComponent<WidgetDefaultProps> = ({
  title,
  body,
  path,
  isDefault,
}) => {
  return (
    <div className={`${isDefault ? styles.default : ''} ${styles.container} `}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.openWidget}>
          {path !== 'dont' && (
            <Link to={`/dashboard/${path}`}>
              <IoExpand></IoExpand>
            </Link>
          )}
        </div>
      </div>
      {body}
    </div>
  );
};

export default WidgetComponent;
