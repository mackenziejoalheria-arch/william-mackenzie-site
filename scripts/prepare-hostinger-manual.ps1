# Copia arquivos para upload manual no File Manager da Hostinger (sem ZIP)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$dest = Join-Path $root 'hostinger-upload'

$include = @(
    'src',
    'public',
    'data',
    'package.json',
    'package-lock.json',
    'next.config.ts',
    'tsconfig.json',
    'postcss.config.mjs',
    'eslint.config.mjs',
    'next-env.d.ts',
    'HOSTINGER-UPLOAD.txt',
    '.env.example',
    '.gitignore'
)

if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }
New-Item -ItemType Directory -Path $dest | Out-Null

foreach ($item in $include) {
    $source = Join-Path $root $item
    if (-not (Test-Path $source)) {
        Write-Warning "Ignorado (nao encontrado): $item"
        continue
    }
    Copy-Item -Path $source -Destination (Join-Path $dest $item) -Recurse -Force
}

$mb = [math]::Round((Get-ChildItem $dest -Recurse -File | Measure-Object Length -Sum).Sum / 1MB, 1)
Write-Host "OK: pasta hostinger-upload ($mb MB) em $dest"
Write-Host "Envie esta pasta inteira pelo File Manager da Hostinger (upload manual)."
