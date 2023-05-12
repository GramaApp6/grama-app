# GramaApp
![build](https://github.com/GramaApp6/grama-app/actions/workflows/build.yml/badge.svg)

Grama Check - Your Local Digital Certificate

### To make api calls to choreo apis via frontend

1. Declare choreo backend public url in .env file

```bash
VITE_CHOREO_BACKEND_URL=
```
2. Create instance.ts file

```bash
import axios from "axios";

export const getInstance = () => {
  axios.create(import.meta.env.VITE_CHOREO_BACKEND_URL );
};
```
3. Get access token using asgardeo sdk

```bash
const accessToken = await getAccessToken();
```
4. Send request to choreo api with access token

```bash
const headers = {
    Authorization: `Bearer ${accessToken}`,
};
const response = await getInstance().post("/", payload, {
    headers: headers,
});
 ```
6. Choreo api return response after validating accesstoken with asgardeo
