function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(500).then(() => console.log('500ms passed'));

