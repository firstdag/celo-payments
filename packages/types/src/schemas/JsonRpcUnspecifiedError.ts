/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Any } from './Any';

export type JsonRpcUnspecifiedError = {
    /**
     * Unspecified error
     *
     */
    code: JsonRpcUnspecifiedError.code;
    message?: string;
    data?: (Any | string | any[] | boolean | number);
}

export namespace JsonRpcUnspecifiedError {

    /**
     * Unspecified error
     *
     */
    export enum code {
        value = -32000
    }


}
