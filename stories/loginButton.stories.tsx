/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import { SessionProvider } from "../src/context/sessionContext";
import LoginButton from "../src/components/logIn";

export default {
  title: "Authentication/Login Button",
  component: LoginButton,
};

async function loginFailed(error: Error) {
  console.log("ERROR", error.message);
}

export function WithChildren(): ReactElement {
  return (
    <SessionProvider>
      <p>
        <em>{"Note: "}</em>
        to test out the Authentication examples, you will need to click the
        pop-out icon on the top right to open this example in a new tab first.
      </p>

      <LoginButton
        oidcIssuer="https://broker.demo-ess.inrupt.com/"
        redirectUrl={window.location.href}
        onError={(error) => loginFailed(error)}
      >
        <Button color="primary">Log In</Button>
      </LoginButton>
    </SessionProvider>
  );
}

export function WithoutChildren(): ReactElement {
  return (
    <SessionProvider>
      <p>
        <em>{"Note: "}</em>
        to test out the Authentication examples, you will need to click the
        pop-out icon on the top right to open this example in a new tab first.
      </p>

      <LoginButton
        oidcIssuer="https://inrupt.net"
        redirectUrl={window.location.href}
        onError={(error) => loginFailed(error)}
      />
    </SessionProvider>
  );
}
