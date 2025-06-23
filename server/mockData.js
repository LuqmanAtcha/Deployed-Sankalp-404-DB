// mockData.js - Sample questions for the quiz game

const mockQuestions = [
  {
    id: 1,
    round: 1,
    category: "Literature",
    question: "Name a famous Shakespeare play",
    answers: [
      { text: "Romeo and Juliet", points: 50, revealed: false },
      { text: "Hamlet", points: 40, revealed: false },
      { text: "Macbeth", points: 30, revealed: false },
      { text: "A Midsummer Night's Dream", points: 20, revealed: false },
      { text: "Othello", points: 10, revealed: false },
      { text: "The Tempest", points: 5, revealed: false }
    ]
  },
  {
    id: 2,
    round: 1,
    category: "Geography",
    question: "Name a country in Europe",
    answers: [
      { text: "France", points: 50, revealed: false },
      { text: "Germany", points: 40, revealed: false },
      { text: "Italy", points: 30, revealed: false },
      { text: "Spain", points: 20, revealed: false },
      { text: "United Kingdom", points: 10, revealed: false },
      { text: "Switzerland", points: 5, revealed: false }
    ]
  },
  {
    id: 3,
    round: 1,
    category: "Food & Drinks",
    question: "Name a popular breakfast food",
    answers: [
      { text: "Eggs", points: 50, revealed: false },
      { text: "Bacon", points: 40, revealed: false },
      { text: "Cereal", points: 30, revealed: false },
      { text: "Pancakes", points: 20, revealed: false },
      { text: "Toast", points: 10, revealed: false },
      { text: "Oatmeal", points: 5, revealed: false }
    ]
  },
  {
    id: 4,
    round: 2,
    category: "Movies",
    question: "Name a superhero from Marvel or DC",
    answers: [
      { text: "Spider-Man", points: 50, revealed: false },
      { text: "Batman", points: 40, revealed: false },
      { text: "Superman", points: 30, revealed: false },
      { text: "Iron Man", points: 20, revealed: false },
      { text: "Wonder Woman", points: 10, revealed: false },
      { text: "Captain America", points: 5, revealed: false }
    ]
  },
  {
    id: 5,
    round: 2,
    category: "Science",
    question: "Name a planet in our solar system",
    answers: [
      { text: "Earth", points: 50, revealed: false },
      { text: "Mars", points: 40, revealed: false },
      { text: "Jupiter", points: 30, revealed: false },
      { text: "Venus", points: 20, revealed: false },
      { text: "Saturn", points: 10, revealed: false },
      { text: "Mercury", points: 5, revealed: false }
    ]
  },
  {
    id: 6,
    round: 3,
    category: "Sports",
    question: "Name a popular sport played worldwide",
    answers: [
      { text: "Soccer/Football", points: 50, revealed: false },
      { text: "Basketball", points: 40, revealed: false },
      { text: "Tennis", points: 30, revealed: false },
      { text: "Cricket", points: 20, revealed: false },
      { text: "Swimming", points: 10, revealed: false },
      { text: "Volleyball", points: 5, revealed: false }
    ]
  },
  {
    id: 7,
    round: 3,
    category: "Animals",
    question: "Name a type of wild cat",
    answers: [
      { text: "Lion", points: 50, revealed: false },
      { text: "Tiger", points: 40, revealed: false },
      { text: "Leopard", points: 30, revealed: false },
      { text: "Cheetah", points: 20, revealed: false },
      { text: "Jaguar", points: 10, revealed: false },
      { text: "Lynx", points: 5, revealed: false }
    ]
  },
  {
    id: 8,
    round: 3,
    category: "Technology",
    question: "Name a popular social media platform",
    answers: [
      { text: "Facebook", points: 50, revealed: false },
      { text: "Instagram", points: 40, revealed: false },
      { text: "Twitter/X", points: 30, revealed: false },
      { text: "TikTok", points: 20, revealed: false },
      { text: "LinkedIn", points: 10, revealed: false },
      { text: "Snapchat", points: 5, revealed: false }
    ]
  }
];

module.exports = mockQuestions;