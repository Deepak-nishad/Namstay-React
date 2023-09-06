import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>
        {err.status} Page {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
