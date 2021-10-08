uses GraphABC;

const w=800;
h=450;

var
i := 1;
x:=random(w-140)+1;
y:=random(h-72-140)+73;
a: array [0..1] of integer;
pic: picture;

procedure MouseDown(xx, yy, mb: integer);
begin
MoveTo(xx, yy);
if (mb = 1) and ((xx - a[0]) ** 2 + (yy - a[1]) ** 2 <= 70 ** 2) then begin
window.clear;
circle(a[0],a[1], 90);
sleep(60);
window.clear;
a[0]:=random(w-140)+1;
a[1]:=random(h-72-140)+73;
circle(a[0],a[1], 70);
inc(i);
var s := '';
str(i, s);
TextOut(0, 0, s);
end;

end;

begin
SetWindowTitle('Кликер.ехе');
setfontsize(72);
setwindowsize(w, h);
centerwindow;
a[0]:=x;
a[1]:=y;
circle(a[0],a[1], 70);
OnMouseDown := MouseDown;
end.
