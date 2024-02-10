export default function setTheme(hourTime) {
  const newTheme = {
    background: "bg-light-background",
    text: "text-light-text",
    link: "text-light-link",
    button: "bg-light-button"
  }    
    
    if(hourTime === 'sunset') {
      newTheme.background = "bg-sunset-background";
      newTheme.link = "text-sunset-link";
      newTheme.text = "text-sunset-text",
      newTheme.button = "bg-sunset-button"
      
      return newTheme;
    }
    
    if(hourTime === 'dark') {
      newTheme.background = "bg-darkmode-background";
      newTheme.link = "text-darkmode-link";
      newTheme.text = "text-darkmode-text"
      newTheme.button = "bg-darkmode-button"

      return newTheme
    }
    return newTheme;
}