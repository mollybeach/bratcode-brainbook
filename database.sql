CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(50) NOT NULL,
  content TEXT NOT NULL,
  level VARCHAR(20) CHECK (level IN ('beginner', 'intermediate', 'advanced'))
);

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(50) NOT NULL,
  question TEXT NOT NULL,
  options TEXT[],
  answer TEXT NOT NULL
);
