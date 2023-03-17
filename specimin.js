// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate () {
      let newDna = [];

      for (let i = 0; i < 15; i++) {
        const dnaBases = ['A', 'T', 'C', 'G'];
        let baseToEdit = dnaBases[Math.floor(Math.random() * 4)];
        let availableBases;
        let newBase;

        if (baseToEdit === 'A') {
          availableBases = ['T', 'C', 'G'];
          newBase = availableBases[Math.floor(Math.random() * 3)];
        };

        if (baseToEdit === 'T') {
          availableBases = ['A', 'C', 'G'];
          newBase = availableBases[Math.floor(Math.random() * 3)];
        };

        if (baseToEdit === 'C') {
          availableBases = ['T', 'A', 'G'];
          newBase = availableBases[Math.floor(Math.random() * 3)];
        };

        if (baseToEdit === 'G') {
          availableBases = ['T', 'C', 'A'];
          newBase = availableBases[Math.floor(Math.random() * 3)];
        };

        newDna.push(newBase);
      }

      return newDna;
    },
    compareDNA: function(pAequor) {

    let commanParts = 0;
    for (let i = 0; i < 14; i++) {
      if (this.dna[i] === pAequor.dna[i]) {
        commanParts += 1;
      };
    }

    let percentComman = commanParts/15 * 100;
    console.log(`specimen  ${this.specimenNum} & specimen ${pAequor.specimenNum} have ${percentComman.toFixed(2)}% DNA in common`);
  },
  willLikelySurvive () {
    let countGC = 0;

    for (let item of this.dna) {
      if (item === "C" || item === 'G') {
        countGC +=1;
      };
    };
    let chancesOfSurvivel = countGC / 15 * 100;
    if (chancesOfSurvivel > 60) {
      return true;
    } else {
      return false;
    };
    
  }
}};


const speciminArray = [];
let numberOfSurvivors = 0;
let speciminID = 1;

while (numberOfSurvivors <= 30) {
  let generatedSpecimin = pAequorFactory(speciminID, mockUpStrand())
  if (generatedSpecimin.willLikelySurvive()) {
    speciminID +=1;
    speciminArray.push(generatedSpecimin);
    numberOfSurvivors +=1;
  };
};

console.log(speciminArray);


