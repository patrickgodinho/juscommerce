import * as React from 'react';
import {
  QueryRenderer,
  graphql,
  ReadyState,
  GraphQLTaggedNode
} from 'react-relay';
import { View, Text } from 'react-native';

import environment from '../../environment';

const query: GraphQLTaggedNode = graphql`
  query ProductListQuery {
    products {
      ...Product_product
    }
  }
`;

const ProductListRendered: (
  readyState: ReadyState
) => React.ReactElement<any> | null = ({ error, props }) => {
  return (
    <View>
      <Text>Oie</Text>
    </View>
  );
};

const ProductList: React.SFC<{}> = props => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{}}
      render={ProductListRendered}
    />
  );
};

export default ProductList;
