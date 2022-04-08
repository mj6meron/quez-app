export default class Book{
  static quationKey = 0
  static answer = 0
  static c = 0
  static myKey
  static personName = null
  static personEmail = null
  static PersonScore = (totalquations) => ((this.answer / totalquations) * 100)
  static wrongAnswers = { 
    boxShadow: " 0 0 5px 5px rgba(255, 40, 0, 0.4)",
    border: "solid 2px rgba(255, 40, 122, 0.4)"
  }
  static rightAnswers = {
    boxShadow: "0 0 5px 5px rgba(106, 255, 255, 0.4)",
    border: "solid 2px rgba(106, 255, 0, 0.4)"
  }
  static wrongAnswerLabel = { 
    color: "red",
    fontSize: "larger"
  }
  static rightAnswerLabel = {
    color: "green",
    fontSize: "larger"
  }
}

