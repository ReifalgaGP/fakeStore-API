# fakeStore-API

REST API kustom untuk data toko e-commerce, cocok untuk pengujian frontend dan prototyping.

## Base URL

```
http://localhost:<PORT>
```

## Endpoint

<!-- TODO: isi sesuai file di folder routes/ -->

| Method   | Endpoint          | Deskripsi                          |
| -------- | ----------------- | ---------------------------------- |
| `GET`    | `/{resource}`     | Mengambil semua data               |
| `GET`    | `/{resource}/:id` | Mengambil satu data berdasarkan ID |
| `POST`   | `/{resource}`     | Menambah data baru                 |
| `PUT`    | `/{resource}/:id` | Memperbarui data                   |
| `DELETE` | `/{resource}/:id` | Menghapus data                     |

---

### `GET /{resource}`

Mengambil daftar data.

**Query Parameters**

| Parameter | Tipe   | Wajib | Deskripsi          |
| --------- | ------ | ----- | ------------------ |
| `limit`   | number | Tidak | Batasi jumlah data |

**Contoh Request**

```bash
curl -X GET "http://localhost:3000/{resource}"
```

**Contoh Response** `200 OK`

```json
[
  {
    "id": 1
  }
]
```

---

### `GET /{resource}/:id`

Mengambil satu data berdasarkan ID.

**Contoh Request**

```bash
curl -X GET "http://localhost:3000/{resource}/1"
```

**Contoh Response** `200 OK`

```json
{
  "id": 1
}
```

---

### `POST /{resource}`

Menambah data baru.

**Request Body**

```json
{
  "field": "value"
}
```

**Contoh Response** `201 Created`

```json
{
  "id": 1,
  "field": "value"
}
```

---

### `PUT /{resource}/:id`

Memperbarui data berdasarkan ID.

**Request Body**

```json
{
  "field": "new value"
}
```

**Contoh Response** `200 OK`

```json
{
  "id": 1,
  "field": "new value"
}
```

---

### `DELETE /{resource}/:id`

Menghapus data berdasarkan ID.

**Contoh Response** `200 OK`

```json
{
  "message": "Data berhasil dihapus"
}
```

---

## Contoh Penggunaan

> Ganti `{resource}` dengan nama endpoint yang tersedia dan sesuaikan `BASE_URL` dengan alamat server Anda.

### JavaScript (Fetch API)

**Ambil semua data**

```javascript
const BASE_URL = "http://localhost:3000";

fetch(`${BASE_URL}/{resource}`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

**Ambil satu data berdasarkan ID**

```javascript
fetch(`${BASE_URL}/{resource}/1`)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

**Tambah data baru (POST)**

```javascript
fetch(`${BASE_URL}/{resource}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ field: "value" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

**Perbarui data (PUT)**

```javascript
fetch(`${BASE_URL}/{resource}/1`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ field: "new value" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

**Hapus data (DELETE)**

```javascript
fetch(`${BASE_URL}/{resource}/1`, { method: "DELETE" })
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### JavaScript (async/await dengan penanganan error)

```javascript
const BASE_URL = "http://localhost:3000";

async function getData() {
  try {
    const res = await fetch(`${BASE_URL}/{resource}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Gagal mengambil data:", error.message);
  }
}

getData();
```

### Axios

Install terlebih dahulu: `npm install axios`

```javascript
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

// GET semua data
const { data } = await api.get("/{resource}");

// GET berdasarkan ID
const one = await api.get("/{resource}/1");

// POST
const created = await api.post("/{resource}", { field: "value" });

// PUT
const updated = await api.put("/{resource}/1", { field: "new value" });

// DELETE
await api.delete("/{resource}/1");
```

### jQuery (AJAX)

```javascript
$.ajax({
  url: "http://localhost:3000/{resource}",
  method: "GET",
  success: function (data) {
    console.log(data);
  },
  error: function (xhr) {
    console.error(xhr.status, xhr.statusText);
  },
});
```

### cURL

```bash
# GET semua data
curl -X GET "http://localhost:3000/{resource}"

# GET berdasarkan ID
curl -X GET "http://localhost:3000/{resource}/1"

# POST
curl -X POST "http://localhost:3000/{resource}" \
  -H "Content-Type: application/json" \
  -d '{"field": "value"}'

# PUT
curl -X PUT "http://localhost:3000/{resource}/1" \
  -H "Content-Type: application/json" \
  -d '{"field": "new value"}'

# DELETE
curl -X DELETE "http://localhost:3000/{resource}/1"
```

### Python (requests)

Install terlebih dahulu: `pip install requests`

```python
import requests

BASE_URL = "http://localhost:3000"
RESOURCE = "resource"  # ganti dengan nama endpoint

# GET semua data
res = requests.get(f"{BASE_URL}/{RESOURCE}")
print(res.json())

# GET berdasarkan ID
res = requests.get(f"{BASE_URL}/{RESOURCE}/1")
print(res.json())

# POST
res = requests.post(f"{BASE_URL}/{RESOURCE}", json={"field": "value"})
print(res.json())

# PUT
res = requests.put(f"{BASE_URL}/{RESOURCE}/1", json={"field": "new value"})
print(res.json())

# DELETE
res = requests.delete(f"{BASE_URL}/{RESOURCE}/1")
print(res.status_code)
```

### PHP (cURL)

```php
<?php
$baseUrl = "http://localhost:3000";

$ch = curl_init("$baseUrl/{resource}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
print_r($data);
```
