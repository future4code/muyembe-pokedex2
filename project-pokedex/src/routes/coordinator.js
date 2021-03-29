export const goToPokemonsScreen = (history) => {
    history.push("/");
};
  
export const goToPodexScreen = (history) => {
  history.push("/pokedex");
};

export const goToPokemonDetails = (history, idPoke) => {
  history.push(`/pokemon/${idPoke}`);
};
  