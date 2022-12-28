const { exec } = require('child_process');

exec('shutdown -s', (error, stdout, stderr) => {
  if (error) {
    console.error(`Hiba történt: ${error}`);
    return;
  }
  console.log(`Kilépés: ${stdout}`);
});
