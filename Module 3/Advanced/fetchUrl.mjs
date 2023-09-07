globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const contentType = response.headers.get('content-type');
      if (contentType.includes('application/json')) {
        return await response.json();
      } else {
        console.warn(`Response for ${url} is not JSON: Content-Type is ${contentType}`);
        return null;
      }
    } else {
      throw new Error(`Request for ${url} failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

async function fetchMultipleURLs(urls) {
  try {
    const data = await Promise.all(urls.map(async (url) => {
      try {
        return await fetchURLData(url);
      } catch (error) {
        console.error(`Error fetching data from ${url}: ${error.message}`);
        return null;
      }
    }));
    return data;
  } catch (error) {
    throw error;
  }
}

async function main() {
  const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://example.com/nonexistent', // An example of an invalid URL
  ];

  try {
    const data = await fetchMultipleURLs(urls);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

main();
