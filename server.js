import express from 'express';
import { pgPool } from './pg_connection.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => {
    console.log('Server is running');
});


// Endpoints with parameters
app.get('/actors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pgPool.query('SELECT * FROM actors WHERE actorid = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Actor not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/directors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pgPool.query('SELECT * FROM directors WHERE directorid = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Director not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/genres/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pgPool.query('SELECT * FROM genres WHERE genreid = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Genre not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pgPool.query('SELECT * FROM movies WHERE movieid = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pgPool.query('SELECT * FROM reviews WHERE reviewid = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pgPool.query('SELECT * FROM users WHERE userid = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//adding a post for adding movies

app.post('/movies', async (req, res) => {

    const { title, releaseyear, genreid, directorid, rating } = req.body;

    try {
        await pgPool.query(
            'INSERT INTO movies (title, releaseyear, genreid, directorid, rating) VALUES ($1,$2,$3,$4,$5)', [ title, releaseyear, genreid, directorid, rating ]
        );
        res.end();
    } catch (error) {
        res.status(400).json({error: error.message})
    }

})

//adding a post for adding movies

app.post('/genres', async (req, res) => {

    const { genreid, genrename } = req.body;

    try {
        await pgPool.query(
            'INSERT INTO genres (genreid, genrename) VALUES ($1,$2)', [ genreid, genrename ]
        );
        res.end();
    } catch (error) {
        res.status(400).json({error: error.message})
    }

})

//Search movie by a title

app.get('/movies/search', async (req, res) => {
    const { title } = req.query; // Expect ?title=movieTitle in the request URL

    try {
        const result = await pgPool.query(
            'SELECT * FROM movies WHERE title ILIKE $1', 
            [`%${title}%`]
        );
        if (result.rows.length > 0) {
            res.json(result.rows);
        } else {
            res.status(404).json({ error: 'No movies found with the given title' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Delete movie by id

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pgPool.query('DELETE FROM movies WHERE movieid = $1 RETURNING *', [id]);
        if (result.rows.length > 0) {
            res.json({ message: 'Movie deleted successfully', deletedMovie: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Update a movie

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const { title, releaseyear, genreid, directorid, rating } = req.body;

    try {
        const result = await pgPool.query(
            'UPDATE movies SET title = $1, releaseyear = $2, genreid = $3, directorid = $4, rating = $5 WHERE movieid = $6 RETURNING *',
            [title, releaseyear, genreid, directorid, rating, id]
        );
        if (result.rows.length > 0) {
            res.json({ message: 'Movie updated successfully', updatedMovie: result.rows[0] });
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Get all movies

app.get('/movies', async (req, res) => {
    try {
        const result = await pgPool.query('SELECT * FROM movies');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});