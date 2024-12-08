const unités = [
    '', 'un', 'deux', 'trois', 'quatre', 'cinq', 
    'six', 'sept', 'huit', 'neuf'
  ];
  
  const dizaines = [
    '', '', 'vingt', 'trente', 'quarante', 
    'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'
  ];
  
  const exceptions = {
    10: 'dix',
    11: 'onze',
    12: 'douze',
    13: 'treize',
    14: 'quatorze',
    15: 'quinze',
    16: 'seize',
    17: 'dix-sept',
    18: 'dix-huit',
    19: 'dix-neuf'
  };
  
  function convertirNombreEnMots(nombre) {
    if (typeof nombre !== 'number' || nombre < 0 || nombre > 999) {
      throw new Error('Entrez un nombre entre 0 et 999.');
    }
  
    if (nombre === 0) return 'zéro';
  
    let mots = '';
  
    // Gérer les centaines
    if (Math.floor(nombre / 100) > 0) {
      const centaines = Math.floor(nombre / 100);
      mots += centaines === 1 ? 'cent' : unités[centaines] + ' cent';
      if (nombre % 100 === 0) return mots.trim();
      mots += ' ';
    }
  
    // Gérer les dizaines et exceptions
    const reste = nombre % 100;
    if (exceptions[reste]) {
      mots += exceptions[reste];
      return mots.trim();
    }
  
    const dizaine = Math.floor(reste / 10);
    const unité = reste % 10;
  
    if (dizaine === 7 || dizaine === 9) {
      mots += dizaines[dizaine] + '-' + (exceptions[10 + unité] || unités[unité]);
    } else if (dizaine > 1) {
      mots += dizaines[dizaine];
      if (unité === 1 && dizaine < 8) {
        mots += '-et-un';
      } else if (unité > 0) {
        mots += '-' + unités[unité];
      }
    } else if (unité > 0) {
      mots += unités[unité];
    }
  
    return mots.trim();
  }
  
  module.exports = convertirNombreEnMots;
  