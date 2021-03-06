/*
 * @Author: jiajunhua
 * @Date: 2020-12-04 18:05:03
 */
const express = require("express")

const app = express()

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
]

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>")
})

app.get("/api/notes", (req, res) => {
  res.json(notes)
})
app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id)
  //   console.log(typeof id)
  const note = notes.find((note) => {
    // console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    return note.id === id
  })
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})
app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find((note) => {
    return note.id === id
  })
  if (note) {
    response.status(204).end()
  } else {
    res.status(404).end()
  }
})
const PORT = 3001
const HOST = "http://localhost:"
app.listen(PORT, () => {
  console.log(`Server running on ${HOST}${PORT}`)
})
