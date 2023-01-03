# Backend

#### Installation

To install the dependencies, run:

```
npm install
```

#### Development

To start the project in development mode, run:

```
npm run dev
```

#### Production

To start the project in production mode, run:

```
npm start
```

#### Testing

To run tests, use:

```
npm run test
```

#### Postman Documentation

The Postman documentation is included in this repository
and can be imported to test the API endpoints.


## API Reference

#### Get items list

```http
  GET /files/list
```


#### Get item

```http
  GET /files/data?fileName={fileName}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fineName`      | `string` | **Required**. Id of item to fetch |

#### Get items

```http
  GET /files/data
```
