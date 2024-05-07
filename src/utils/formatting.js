import qs from "qs";

const stringifyQs = (queryObject) => {
  const query = qs.stringify(queryObject, {
    encodeValuesOnly: true, // prettify URL
  });
  return query;
};

const parseQs = (queryString) => {
  const query = qs.parse(queryString);
  return query;
};

export { stringifyQs, parseQs };
