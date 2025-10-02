class Formatter {
  static capitalize(string) {
    if (!string) return '';
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // Remove all non-alphanumeric characters except dashes, single quotes, and spaces
    return string.replace(/[^a-zA-Z0-9\-\' ]+/g, '');
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    if (!string) return '';
    const words = string.toLowerCase().split(' ');
    const titleized = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
    return titleized.join(' ');
  }
}
