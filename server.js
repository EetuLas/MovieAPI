import express from 'express';
import { pgPool } from './pg_connection.js';

const app = express();

app.listen(3001, ()=>{
    console.log('server is running')

})

app.get('/actors', async (req,res) => {
    
    try {
        const result = await pgPool.query('SELECT * FROM actors');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

app.get('/directors', async (req,res) => {
    
    try {
        const result = await pgPool.query('SELECT * FROM directors');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

app.get('/genres', async (req,res) => {
    
    try {
        const result = await pgPool.query('SELECT * FROM genres');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

app.get('/movies', async (req,res) => {
    
    try {
        const result = await pgPool.query('SELECT * FROM movies');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

app.get('/reviews', async (req,res) => {
    
    try {
        const result = await pgPool.query('SELECT * FROM reviews');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

app.get('/users', async (req,res) => {
    
    try {
        const result = await pgPool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})