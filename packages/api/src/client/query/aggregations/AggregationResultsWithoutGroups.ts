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

import type {
  OntologyDefinition,
  ObjectTypesFrom,
  PropertyKeysFrom,
  OsdkObjectPropertyType,
  PropertyDefinitionFrom,
} from "#ontology";
import type { StringArrayToUnion } from "#util";
import type { AggregationClause } from "./AggregationsClause";

export type AggregationResultsWithoutGroups<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  AC extends AggregationClause<O, K>,
> = {
  [P in PropertyKeysFrom<O, K>]: AC[P] extends readonly string[] | string
    ? {
        [Z in StringArrayToUnion<AC[P]>]: Z extends "approximateDistinct"
          ? number
          : OsdkObjectPropertyType<PropertyDefinitionFrom<O, K, P>>;
      }
    : never;
};
