/** @format */

import { Button } from "antd";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className=' flex justify-center items-center flex-col h-screen w-screen'>
      <h1>Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button type='primary' size='large'>
        <a href='/'>Go back home</a>
      </Button>
    </div>
  );
}
