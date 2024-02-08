export default function setTheme(hourTime) {
  const newTheme = {
    background: "bg-light-background",
    text: "text-light-link",
    link: "text-light-text"
  }    
    
    if(hourTime === 'sunset') {
      newTheme.background = "bg-sunset-background";
      newTheme.link = "text-sunset-link";
      newTheme.text = "text-sunset-text"
      
      return newTheme;
    }
    
    if(hourTime === 'dark') {
      newTheme.background = "bg-dark-background";
      newTheme.link = "text-dark-link";
      newTheme.text = "text-dark-text"
      
      return newTheme
    }
    return newTheme;
}