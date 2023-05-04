const express = require("express");
const songs = express.Router();
const { getAllSongs, getASong, createSong, deleteSong, updateSong } = require("../queries/songs");

// INDEX route
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();

    if (allSongs) {
        res.status(200).json(allSongs);
      } else {
        res.status(500).json({ error: "server error" });
      }
});

// Show route
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getASong(id);

    if (song.id) {
        res.status(202).json(song);
      } else {
        res.status(404).json({ error: "server error" });
      }
});

// CREATE Route
songs.post('/', async (req, res) => {
  const newSong = req.body;
  
  if (!newSong.name) {
    return res.status(400).json({ error: "Name is missing" });
  } else if (!newSong.artist) {
    return res.status(400).json({ error: "Artist is missing" });
  } else if (!newSong.is_favorite === "boolean") {
    return res.status(400).json({ error: "is_favorite must be a boolean" });
  }

//   !newSong.name ? res.status(400).json({ error: "Name is missing" }) :
// !newSong.artist ? res.status(400).json({ error: "Artist is missing" }) :
// typeof newSong.is_favorite !== "boolean" ? res.status(400).json({ error: "is_favorite must be a boolean" }) :

  try {
    const addedSong = await createSong(newSong)
    res.status(200).json(addedSong)
  } catch (error) {
    res.status(400).json({ error: error})
  }
});

// Delete route
songs.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSong = await deleteSong(id)
    if (deletedSong.id) {
      res.status(200).json(deletedSong)
    } else {
      res.status(404).json({ error: `Song with ID ${id} not found` })
    }
  } catch (error) {
    res.status(400).json({ error: error })
  }
})

//UPDATE route
songs.put("/:id",  async (req, res) => {
    const { id } = req.params;
    const { body} = req;

  try {
  const updatedSong = await updateSong(id, body);
  res.status(200).json(updatedSong);
  } catch (error) {
    res.status(400).json({ error: error})
  }
});

module.exports = songs
