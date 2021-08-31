import { connector } from 'screens/TasksPage/TasksPage';
import { ConnectedProps } from 'react-redux';

type PropsFromRedux = ConnectedProps<typeof connector>;
export type Props = PropsFromRedux;
