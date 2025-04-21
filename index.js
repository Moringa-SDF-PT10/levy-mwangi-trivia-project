fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
   .then(resp => resp.json())
   .then(results => {
    console.log(results)
   })