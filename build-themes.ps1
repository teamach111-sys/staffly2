# Builds a standalone static folder per theme (dup0..dup4).
# Output: ./build-themes/dup0 .. dup4 — each is a complete site you can upload.
#
# Each folder is built with:
#   - Home.jsx    importing themes/duplicates/dupN.css
#   - Header.jsx  importing themes/duplicates/header-dupN.css
#   - Vite base = /dupN/  (so assets load correctly under site/dupN/)
#
# Run:  powershell -ExecutionPolicy Bypass -File build-themes.ps1

$ErrorActionPreference = 'Stop'
$root = (Get-Location).Path
$outRoot = Join-Path $root 'build-themes'
$homeJsx = Join-Path $root 'src\pages\Home.jsx'
$headerJsx = Join-Path $root 'src\components\Header.jsx'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Set-Utf8NoBom([string]$path, [string]$content) {
    [System.IO.File]::WriteAllText($path, $content, $utf8NoBom)
}

Write-Output "Output root: $outRoot"
foreach ($n in 0..4) {
    Write-Output ""
    Write-Output "=========== Building dup$n ==========="

    # 1) Point imports at this dup (UTF-8-safe: no mojibake, no BOM)
    $h = [System.IO.File]::ReadAllText($homeJsx, [System.Text.Encoding]::UTF8)
    $h = $h -replace "duplicates/dup\d+\.css", "duplicates/dup$n.css"
    Set-Utf8NoBom $homeJsx $h

    $t = [System.IO.File]::ReadAllText($headerJsx, [System.Text.Encoding]::UTF8)
    $t = $t -replace "duplicates/header-dup\d+\.css", "duplicates/header-dup$n.css"
    Set-Utf8NoBom $headerJsx $t

    Write-Output "  imports -> dup${n}.css / header-dup${n}.css"

    # 2) Build with this dup's base & outDir
    $outDir = Join-Path $outRoot "dup$n"
    # remove stale output
    if (Test-Path $outDir) { Remove-Item -Recurse -Force $outDir }

    & npm run build -- "--base=/dup$n/" "--outDir=$outDir" "--emptyOutDir" 2>&1 | Out-Host
    if ($LASTEXITCODE -ne 0) { Write-Error "build failed for dup$n"; exit 1 }

    Write-Output "  -> $outDir"
}

Write-Output ""
Write-Output "=========== Done ==========="
Write-Output "Upload each folder in $outRoot to your server:"
Write-Output "  site/dup0/   dup1/   dup2/   dup3/   dup4/"
Write-Output "Restore imports to your default (dup4) below."
