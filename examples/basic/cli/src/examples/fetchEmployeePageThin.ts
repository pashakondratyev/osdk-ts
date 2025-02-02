/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as OsdkApi from "@osdk/api";
import { Objects } from "@osdk/api";
import { fetchPageOrThrow } from "@osdk/api/objects";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import type { OntologyType } from "../OntologyType";

export async function fetchEmployeePageThin(
  thinClient: OsdkApi.ThinClient<OntologyType>,
) {
  let result = await fetchPageOrThrow(thinClient, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  expectType<string>(result.data[0].adUsername);

  // locationCity was not selected!
  expectType<
    TypeOf<
      {
        locationCity: string | undefined;
      },
      (typeof result.data)[0]
    >
  >(false);

  // OR
  let result2 = await Objects.fetchPageOrThrow(thinClient, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  // or
  let result3 = await OsdkApi.Objects.fetchPageOrThrow(thinClient, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  // Quick check to make sure we get everything
  let result4 = await fetchPageOrThrow(thinClient, "Employee", {});

  console.log("fetchEmployeePageThin(): ");
  console.table(
    result.data.map(({ adUsername, businessTitle, employeeNumber }) => ({
      adUsername,
      businessTitle,
      employeeNumber,
    })),
  );
  console.log();
}
