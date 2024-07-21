import { useState, useEffect } from "react";

function useDictionaryInfo(word) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (word) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.length > 0) {
            setData({
              definition: res[0].meanings[0].definitions[0].definition,
              partOfSpeech: res[0].meanings[0].partOfSpeech,
              audioUrl: res[0].phonetics[0].audio,
            });
          } else {
            setData({
              definition: "No definition found",
            });
          }
        })
        .catch((error) => console.error('Error fetching dictionary data:', error));
    }
  }, [word]);

  return data;
}

export default useDictionaryInfo;
