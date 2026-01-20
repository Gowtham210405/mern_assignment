const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//Toggle theme
settings.theme = (settings.theme === "light") ? "dark" : "light";

//Turn autoSave to true
settings.autoSave = true;

//Remove the notifications setting
delete settings.notifications;

//Freeze the settings object
Object.freeze(settings);

console.log("Final settings:", settings);
