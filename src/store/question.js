export const questions = [
  {
    questionText: "Что такое Js?",
    answerOptions: [
      { text: "кокое то ответ ", isCorrect: false },
      { text: "кокое то ответ", isCorrect: false },
      {
        text: "JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт",
        isCorrect: true,
      },
      { text: "кокое то ответ", isCorrect: false },
    ],
  },
  {
    questionText: "Для чего используется оператор " && "?",
    answerOptions: [
      { text: " кокое то ответ ", isCorrect: false },
      {
        text: "Логическое И ( && ) вычисляет операнды слева направо, возвращая сразу значение первого попавшего ложноподобного операнда",
        isCorrect: true,
      },
      { text: "кокое то ответ", isCorrect: false },
      { text: "кокое то ответ", isCorrect: false },
    ],
  },
  {
    questionText: "Для чего используется оператор " || "? ",
    answerOptions: [
      {
        text: "Логический оператор ИЛИ ( || ) (дизъюнкция) для набора операндов истинен будет true только в случае, если один или несколько его операндов имеют значение true .",
        isCorrect: true,
      },
      { text: "кокое то ответ", isCorrect: false },
      { text: "кокое то ответ", isCorrect: false },
      { text: "кокое то ответ", isCorrect: false },
    ],
  },
  {
    questionText: ("В чем разница между операторами " == " и ") === "?",
    answerOptions: [
      { text: "кокое то ответ", isCorrect: false },
      { text: "кокое то ответ", isCorrect: false },
      { text: "кокое то ответ", isCorrect: false },
      {
        text: "Оператор == сравнивает на равенство, а вот === — на идентичность. Плюс оператора === состоит в том, что он не приводит два значения к одному типу. Именно из-за этого он обычно и используется.",
        isCorrect: true,
      },
    ],
  },
];
