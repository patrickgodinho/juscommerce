/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { Product_product$ref } from "./Product_product.graphql";
export type ProductListQueryVariables = {};
export type ProductListQueryResponse = {
    readonly products: ReadonlyArray<{
        readonly " $fragmentRefs": Product_product$ref;
    } | null> | null;
};
export type ProductListQuery = {
    readonly response: ProductListQueryResponse;
    readonly variables: ProductListQueryVariables;
};



/*
query ProductListQuery {
  products {
    ...Product_product
    id
  }
}

fragment Product_product on ProductType {
  id
  name
  image
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProductListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductType",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Product_product",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductType",
        "plural": true,
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProductListQuery",
    "id": null,
    "text": "query ProductListQuery {\n  products {\n    ...Product_product\n    id\n  }\n}\n\nfragment Product_product on ProductType {\n  id\n  name\n  image\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '920f7f98417e35722d6cae5d2d461102';
export default node;
