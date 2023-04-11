import checkIcon from '../../assets/img/check.svg';
import errorIcon from '../../assets/img/error.svg';
import infoIcon from '../../assets/img/info.svg';
import warningIcon from '../../assets/img/warning.svg';

export const TOAST_PROPERTIES = [
  {
    title: 'Success',
    description: 'Logged in successfully',
    backgroundColor: '#5cb85c',
    icon: checkIcon,
  },
  {
    title: 'Success',
    description: 'Sign up successfully',
    backgroundColor: '#5cb85c',
    icon: checkIcon,
  },
  {
    title: 'Success',
    description: 'Upload file successfully',
    backgroundColor: '#5cb85c',
    icon: checkIcon,
  },
  {
    title: 'Danger',
    description: 'This is an error toast component',
    backgroundColor: '#d9534f',
    icon: errorIcon,
  },
  {
    title: 'Info',
    description: 'This is an info toast component',
    backgroundColor: '#5bc0de',
    icon: infoIcon,
  },
  {
    title: 'Warning',
    description: 'This is a warning toast component',
    backgroundColor: '#f0ad4e',
    icon: warningIcon,
  },
];
