import express from 'express';
import { pgPool } from './pg_connection.js';

const app = express();

app.use(express.json());

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

//adding a app.post for adding movies

app.post('/movies', async (req, res) => {

    const { title, releaseyear, genreid, directorid, rating } = req.body;

    try {
        await pgPool.query(
            'INSERT INTO movies (title, releaseyear, genreid, directorid, rating) VALUES ($1,$2,$3,$4,$5)', [title, releaseyear, genreid, directorid, rating ]
        );
        res.end();
    } catch (error) {
        res.status(400).json({error: error.message})
    }

})