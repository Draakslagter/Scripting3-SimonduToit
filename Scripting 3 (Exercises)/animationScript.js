function toggleAnim()
{
  
  let tran = document.getElementById("smallBox").style.transitionDuration;
  if (tran == "2s")
  {
    document.getElementById("smallBox").style.transitionDuration = "0s";
  }
  else
  {
    document.getElementById("smallBox").style.transitionDuration = "2s";
  }
}