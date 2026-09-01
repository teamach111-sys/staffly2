@echo off
setlocal
set "me=%~n0"
set "num=%me:dup=%"
if "%me%"=="%num%" ( echo ERROR: could not read dup number from filename & goto :end )
echo Setting theme to dup%num% (home + header)...

powershell -NoProfile -Command ^
  "$h='src\pages\Home.jsx';$t=[IO.File]::ReadAllText($h);" ^
  "$t=$t -replace 'duplicates/dup\d+\.css','duplicates/dup%num%.css';" ^
  "[IO.File]::WriteAllText($h,$t,(New-Object Text.UTF8Encoding($false)));" ^
  "$g='src\components\Header.jsx';$u=[IO.File]::ReadAllText($g);" ^
  "$u=$u -replace 'duplicates/header-dup\d+\.css','duplicates/header-dup%num%.css';" ^
  "[IO.File]::WriteAllText($g,$u,(New-Object Text.UTF8Encoding($false)));" ^
  "Write-Output ('  Home    -> dup%num%.css');" ^
  "Write-Output ('  Header  -> header-dup%num%.css')"

echo.
echo Done. Rebuild with:  npm run build
:end
endlocal