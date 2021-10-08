uses GraphABC;

var
i := 1;
pic: picture;

procedure MouseDown(x, y, mb: integer);
begin
MoveTo(x, y);
if (mb = 1) and ((x - 425) ** 2 + (y - 275) ** 2 <= 150 ** 2) then begin
window.clear;
circle(450, 275, 170);
sleep(50);
window.clear;
circle(450, 275, 150);
inc(i);
var s := '';
str(i, s);
TextOut(100, 25, s);
end;

end;

begin
SetWindowTitle('Кликер.ехе');
setfontsize(72);
setwindowsize(900, 550);
centerwindow;
circle(450, 275, 150);
OnMouseDown := MouseDown;
end.
