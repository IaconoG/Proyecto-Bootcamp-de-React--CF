import React from 'react';
import { Link } from 'react-router-dom';

import { WidgetName, Path } from '../../../../../../utils/types';

import styles from './Widget.module.css';
import { IoExpand } from 'react-icons/io5';

interface WidgetDefaultProps {
  title: WidgetName;
  body: React.ReactElement;
  path: Path;
}

const WidgetComponent: React.FunctionComponent<WidgetDefaultProps> = ({ title, body, path }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <div className={styles.openWidget}>
          {path !== 'dont' && (
            <Link to={`/dashboard/${path}`}>
              <IoExpand></IoExpand>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default WidgetComponent;
