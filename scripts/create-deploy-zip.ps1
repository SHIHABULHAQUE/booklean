$ErrorActionPreference = 'Stop'

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$zipPath = Join-Path (Split-Path -Parent $projectRoot) 'booklean-hostinger-deploy.zip'
$includeRoots = @(
  'package.json',
  'package-lock.json',
  'server.js',
  'server.mjs',
  'scripts',
  'angular.json',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.spec.json',
  'src',
  'public',
  '.env.example',
  'README.md',
  'HOSTINGER_DEPLOYMENT.md'
)

$excludedDirectories = @(
  'node_modules',
  '.git',
  '.angular',
  '.vscode',
  'tmp',
  'dist'
)

if (Test-Path -LiteralPath $zipPath) {
  Remove-Item -LiteralPath $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  foreach ($root in $includeRoots) {
    $absoluteRoot = Join-Path $projectRoot $root
    if (-not (Test-Path -LiteralPath $absoluteRoot)) {
      continue
    }

    $item = Get-Item -LiteralPath $absoluteRoot -Force
    $files = if ($item.PSIsContainer) {
      Get-ChildItem -LiteralPath $item.FullName -Recurse -File -Force
    } else {
      @($item)
    }

    foreach ($file in $files) {
      $rootUri = [System.Uri]::new(($projectRoot.ProviderPath.TrimEnd('\') + '\'))
      $fileUri = [System.Uri]::new($file.FullName)
      $relativePath = [System.Uri]::UnescapeDataString($rootUri.MakeRelativeUri($fileUri).ToString())
      $parts = $relativePath -split '[\\/]'
      $excludedPart = $parts | Where-Object { $excludedDirectories -contains $_ } | Select-Object -First 1
      if ($excludedPart) {
        continue
      }

      $entryName = ($parts -join '/')
      $null = [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $entryName, [System.IO.Compression.CompressionLevel]::Optimal)
    }
  }
} finally {
  $zip.Dispose()
}

Get-Item -LiteralPath $zipPath
