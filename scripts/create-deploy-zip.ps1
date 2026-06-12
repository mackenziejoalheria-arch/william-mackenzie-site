# Gera deploy.zip apenas com arquivos do Next.js (sem lixo de deploys antigos)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$staging = Join-Path $env:TEMP 'site2026-hostinger-staging'
$zipPath = Join-Path $root 'deploy.zip'

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

if (Test-Path $staging) { Remove-Item $staging -Recurse -Force }
New-Item -ItemType Directory -Path $staging | Out-Null

foreach ($item in $include) {
    $source = Join-Path $root $item
    if (-not (Test-Path $source)) {
        Write-Warning "Ignorado (nao encontrado): $item"
        continue
    }
    Copy-Item -Path $source -Destination (Join-Path $staging $item) -Recurse -Force
}

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Set-Location $staging
tar -a -c -f $zipPath .
Set-Location $root

$mb = [math]::Round((Get-Item $zipPath).Length / 1MB, 1)
Write-Host "OK: deploy.zip ($mb MB) em $zipPath"
Remove-Item $staging -Recurse -Force
