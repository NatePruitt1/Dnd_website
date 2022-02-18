const {app, BrowserWindow} = require('electron');

let win = null

const createWindow = () => {
  win = new BrowserWindow({width: 800, height: 800});
  win.loadFile("./src/html/index.html");

}

app.whenReady().then(() => {
  createWindow();
})

app.on("window-all-closed", () => {
  if(process.platform !== "darwin") app.quit();
})
