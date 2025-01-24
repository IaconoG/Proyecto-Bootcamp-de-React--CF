import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WidgetKeys } from '../../../state/utils/types';
import userInfo from '../../../state/stores/userInfo/user-info';

const useRedirectIfWidgetNotActive = (widgetName: WidgetKeys) => {
  const navigate = useNavigate();
  const { getUserWidgets } = userInfo();

  useEffect(() => {
    const userWidgetToDo = getUserWidgets()[widgetName];
    if (!userWidgetToDo.active) navigate('/dashboard');
  }, [widgetName, navigate]);
};

export default useRedirectIfWidgetNotActive;
