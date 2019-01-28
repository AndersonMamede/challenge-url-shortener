import { string, number, shape } from 'prop-types';

const shortenedItemDataType = shape({
  id: string.isRequired,
  hits: number.isRequired,
  url: string.isRequired,
  shortUrl: string.isRequired,
});

export { shortenedItemDataType };
