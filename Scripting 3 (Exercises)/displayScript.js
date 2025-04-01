function changeDisplayType()
{
  box = window.getComputedStyle(body, null).display;
if (box == flex)
{
  box = grid;
}
else
{
  box.display = flex;
}
}