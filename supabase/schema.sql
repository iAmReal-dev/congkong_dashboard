CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    profile_complete BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Matches (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES Events(id),
    participant1_id INTEGER REFERENCES Users(id),
    participant2_id INTEGER REFERENCES Users(id),
    match_score FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Meetings (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES Matches(id),
    date DATE,
    status VARCHAR(50),
    satisfaction_score INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);