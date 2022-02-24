module.exports = function toReadable (number) {
  if (number <= 20) {
    switch (number) {
      case 0: return 'zero';
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
      case 13: return 'thirteen';
      case 14: return 'fourteen';
      case 15: return 'fifteen';
      case 16: return 'sixteen';
      case 17: return 'seventeen';
      case 18: return 'eighteen';
      case 19: return 'nineteen';
      case 20: return 'twenty';
      default: return null;
    };
  } else if (number > 20 && number < 100) {
    const nString = number.toString();
    const nEnding = +nString.slice(1);
    let lastReadable = null;

    if (nEnding === 0) {
      lastReadable = '';
    } else {
      lastReadable = toReadable(nEnding);
    };

    switch (+nString[0]) {
      case 2: return ('twenty ' + lastReadable).trim();
      case 3: return ('thirty ' + lastReadable).trim();
      case 4: return ('forty ' + lastReadable).trim();
      case 5: return ('fifty ' + lastReadable).trim();
      case 6: return ('sixty ' + lastReadable).trim();
      case 7: return ('seventy ' + lastReadable).trim();
      case 8: return ('eighty ' + lastReadable).trim();
      case 9: return ('ninety ' + lastReadable).trim();
      default: return null;
    };
  } else if (number >= 100 && number < 1000) {
    const nString = number.toString();

    if (!(number % 100)) {
      return toReadable(+nString[0]) + ' hundred';
    } else {
      return (toReadable(+nString[0]) + ' hundred ' + toReadable(+nString.slice(1))).trim();
    }
  };
}
