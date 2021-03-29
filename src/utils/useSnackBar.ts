import Snackbar from 'react-native-snackbar';

export type SnackBarProps = {
  text: string;
  type?: 'success' | 'error' | 'info' | 'default';
  duration?: number;
};

const getType = (type: SnackBarProps['type'] = 'default') =>
  ({
    success: '#00BF9D',
    error: '#fa4343',
    info: '#4355fa',
    default: 'transparent',
  }[type]);

const useSnackBar = ({
  text,
  type,
  duration = Snackbar.LENGTH_LONG,
  ...rest
}: SnackBarProps) =>
  Snackbar.show({
    text,
    duration,
    backgroundColor: getType(type),
    ...rest,
  });

export default useSnackBar;
