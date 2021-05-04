let timer = 100
const spinnerTicks = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    '];

for (let ticks of spinnerTicks) {
  timer += 200
  setTimeout(() => {
   process.stdout.write(ticks)
  }, timer);
}

spinnerTicks.map(ticks => {
  timer += 200
  setTimeout(() => {
   process.stdout.write(ticks)
  }, timer);
})

spinnerTicks.forEach(ticks => {
  timer += 200
  setTimeout(() => {
   process.stdout.write(ticks)
  }, timer);
})
