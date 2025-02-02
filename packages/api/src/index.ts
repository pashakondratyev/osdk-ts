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

export type { WhereClause } from "#client/query";
export type { OsdkObject } from "#ontology";
export { createClient, createThinClient, isOk } from "./client";
export type { Client, ObjectSet, ResultOrError, ThinClient } from "./client";

// FIXME: Shoudl this be Objects or Object?
export * as Objects from "./client/object";

export type {
  ObjectDefinition,
  OntologyDefinition,
} from "./ontology/Definition";
