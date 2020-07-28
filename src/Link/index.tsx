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
import { Thing, Url, UrlString, getUrlOne } from "@inrupt/solid-client";

interface Props {
  children?: React.ReactNode;
  property: Url | UrlString;
  thing: Thing;
  className?: string;
  linkOptions?: Record<string, unknown>;
}

export default function Link({
  children,
  property,
  thing,
  className,
  linkOptions,
}: Props): ReactElement {
  const href = getUrlOne(thing, property);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={href || ""} className={className} {...linkOptions}>
      {children || property}
    </a>
  );
}

Link.defaultProps = {
  children: null,
  className: null,
  linkOptions: null,
};
