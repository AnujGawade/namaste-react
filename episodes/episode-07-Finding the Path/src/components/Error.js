import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!</h1>
      {err.status}: {err.error.message}
    </div>
  );
};

export default Error;
