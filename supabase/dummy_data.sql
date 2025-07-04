-- Users
INSERT INTO Users (name, email, profile_complete) VALUES
('Alice', 'alice@example.com', TRUE),
('Bob', 'bob@example.com', TRUE),
('Charlie', 'charlie@example.com', FALSE),
('Daisy', 'daisy@example.com', TRUE),
('Ethan', 'ethan@example.com', TRUE),
('Fiona', 'fiona@example.com', FALSE),
('George', 'george@example.com', TRUE),
('Hannah', 'hannah@example.com', TRUE),
('Ian', 'ian@example.com', TRUE),
('Jenny', 'jenny@example.com', TRUE);

-- Events
INSERT INTO Events (name, date) VALUES
('Event 1', '2023-05-01'),
('Event 2', '2023-06-15'),
('Event 3', '2023-07-20');

-- Matches
INSERT INTO Matches (event_id, participant1_id, participant2_id, match_score) VALUES
(1, 1, 2, 0.8),
(1, 3, 4, 0.9),
(1, 5, 6, 0.7),
(2, 2, 3, 0.85),
(2, 4, 5, 0.75),
(3, 1, 3, 0.9);

-- Meetings
INSERT INTO Meetings (match_id, date, status, satisfaction_score) VALUES
(1, '2023-05-10', 'completed', 4),
(2, '2023-05-15', 'completed', 5),
(3, '2023-05-20', 'scheduled', NULL),
(4, '2023-06-20', 'completed', 3),
(5, '2023-06-25', 'canceled', NULL),
(6, '2023-07-25', 'scheduled', NULL);