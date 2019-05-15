import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  ConcreteBatchRequest
} from 'relay-runtime';

function fetchQuery(operation: ConcreteBatchRequest, variables: Variables) {
  return fetch('/localhost:4001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
