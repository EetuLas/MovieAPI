
CREATE TABLE Genres (
    GenreID INTEGER PRIMARY KEY,
    GenreName TEXT NOT NULL
);
CREATE TABLE Directors (
    DirectorID INTEGER PRIMARY KEY,
    DirFirstName TEXT NOT NULL,
    DirLastName TEXT NOT NULL
);
CREATE TABLE Movies (
    MovieID INTEGER PRIMARY KEY,
    Title TEXT NOT NULL,
    ReleaseYear INTEGER,
    GenreID INTEGER,
    DirectorID INTEGER,
    Rating REAL,
    FOREIGN KEY (GenreID) REFERENCES Genres(GenreID),
    FOREIGN KEY (DirectorID) REFERENCES Directors(DirectorID)
);
CREATE TABLE Actors (
    ActorID INTEGER PRIMARY KEY,
    ActorFirstName TEXT NOT NULL,
    ActorLastName TEXT NOT NULL,
    MovieID INTEGER,
    FOREIGN KEY (MovieID) REFERENCES Movies(MovieID)
);
CREATE TABLE Users (
    UserID INTEGER PRIMARY KEY,
    UserName TEXT NOT NULL,
    Email TEXT NOT NULL,
    Password TEXT NOT NULL
);
CREATE TABLE Reviews (
    ReviewID INTEGER PRIMARY KEY,
    ReviewDate DATE,
    Rating REAL,
    MovieID INTEGER,
    UserID INTEGER,
    FOREIGN KEY (MovieID) REFERENCES Movies(MovieID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);