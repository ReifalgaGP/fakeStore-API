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
