import {
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  template,
  url,
  move,
} from '@angular-devkit/schematics';
import { Path, dirname } from '@angular-devkit/core';
import * as ts from 'typescript';
import {
  stringUtils,
  buildRelativePath,
  insertImport,
  Change,
  InsertChange,
  getProjectPath,
  isLib,
  findModuleFromOptions,
  addImportToModule,
  parseName,
} from '@ngrx/schematics/schematics-core';
import { Schema as AddOptions } from './schema';

function setDefaultCollection(options: AddOptions): Rule {
  return (host: Tree) => {
    return host;
  };
}

export default function(options: AddOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    // options.path = getProjectPath(host, options);

    if (!options.defaultCollection) {
      return host;
    }

    return chain([setDefaultCollection(options)])(host, context);
  };
}
