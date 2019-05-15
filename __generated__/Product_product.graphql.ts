/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _Product_product$ref: unique symbol;
export type Product_product$ref = typeof _Product_product$ref;
export type Product_product = {
    readonly id: string | null;
    readonly name: string | null;
    readonly image: string | null;
    readonly " $refType": Product_product$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Product_product",
  "type": "ProductType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '1c9264b296068291b07d4cc17b832ca5';
export default node;
