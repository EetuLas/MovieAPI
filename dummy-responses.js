// Dummy responses with data from the database
app.get('/dummy-actors', (req, res) => {
    const dummyActors = [
        { ActorID: 1, ActorFirstName: 'Sam', ActorLastName: 'Neill', MovieID: 1 },
        { ActorID: 2, ActorFirstName: 'Leonardo', ActorLastName: 'DiCaprio', MovieID: 2 },
        { ActorID: 3, ActorFirstName: 'Saoirse', ActorLastName: 'Ronan', MovieID: 3 }
    ];
    res.json(dummyActors);
});

app.get('/dummy-directors', (req, res) => {
    const dummyDirectors = [
        { DirectorID: 1, DirFirstName: 'Steven', DirLastName: 'Spielberg' },
        { DirectorID: 2, DirFirstName: 'Christopher', DirLastName: 'Nolan' },
        { DirectorID: 3, DirFirstName: 'Greta', DirLastName: 'Gerwig' }
    ];
    res.json(dummyDirectors);
});

app.get('/dummy-genres', (req, res) => {
    const dummyGenres = [
        { GenreID: 1, GenreName: 'Action' },
        { GenreID: 2, GenreName: 'Comedy' },
        { GenreID: 3, GenreName: 'Drama' }
    ];
    res.json(dummyGenres);
});

app.get('/dummy-movies', (req, res) => {
    const dummyMovies = [
        { MovieID: 1, Title: 'Jurassic Park', ReleaseYear: 1993, GenreID: 1, DirectorID: 1, Rating: 8.1 },
        { MovieID: 2, Title: 'Inception', ReleaseYear: 2010, GenreID: 1, DirectorID: 2, Rating: 8.8 },
        { MovieID: 3, Title: 'Little Women', ReleaseYear: 2019, GenreID: 3, DirectorID: 3, Rating: 8.2 }
    ];
    res.json(dummyMovies);
});

app.get('/dummy-reviews', (req, res) => {
    const dummyReviews = [
        { ReviewID: 1, ReviewDate: '2024-01-01', Rating: 8.5, MovieID: 1, UserID: 1 },
        { ReviewID: 2, ReviewDate: '2024-01-02', Rating: 9.0, MovieID: 2, UserID: 2 },
        { ReviewID: 3, ReviewDate: '2024-01-03', Rating: 7.5, MovieID: 3, UserID: 3 }
    ];
    res.json(dummyReviews);
});

app.get('/dummy-users', (req, res) => {
    const dummyUsers = [
        { UserID: 1, UserName: 'john_doe', Email: 'john@example.com', Password: 'password123' },
        { UserID: 2, UserName: 'jane_smith', Email: 'jane@example.com', Password: 'securepass456' },
        { UserID: 3, UserName: 'alice_wonder', Email: 'alice@example.com', Password: 'wonderland789' }
    ];
    res.json(dummyUsers);
});