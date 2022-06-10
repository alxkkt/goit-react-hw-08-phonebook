import Notiflix from 'notiflix';

const ShowErrorNotification = ({ msg }) => {
  return Notiflix.Report.failure(
    'Oops, something went wrong!',
    `Reason: ${msg}`,
  );
};

export default ShowErrorNotification;
