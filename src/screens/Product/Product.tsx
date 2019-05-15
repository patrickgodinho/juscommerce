import * as React from 'react';

import { graphql, createFragmentContainer } from 'react-relay';
import { View } from 'react-native';

const ProductComponent: React.SFC<{}> = props => {
  return <View />;
};

export default createFragmentContainer(
  ProductComponent,
  graphql`
    fragment Product_product on ProductType {
      id
      name
      image
    }
  `
);
