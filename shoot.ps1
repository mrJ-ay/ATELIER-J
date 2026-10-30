$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$out = "$PSScriptRoot\shots"
New-Item -ItemType Directory -Force $out | Out-Null
$sites = [ordered]@{
  jarket   = 'https://jarket.onrender.com'
  wordlens = 'https://wordlens-app.onrender.com'
  vegas    = 'https://vegas-slots-2izy.onrender.com'
  inkvoid  = 'https://inkvoid-eoqx.onrender.com'
  nova     = 'https://nova-hmqj.onrender.com'
  omok     = 'https://chaos-omok.onrender.com'
  fakepress = 'https://fakepress-1.onrender.com'
  pigsty   = 'https://pigsty.onrender.com'
  oneid    = 'https://oneid-icvq.onrender.com'
}
foreach ($k in $sites.Keys) {
  $file = Join-Path $out "$k.png"
  Remove-Item $file -ErrorAction SilentlyContinue
  & $edge --headless=new --disable-gpu --hide-scrollbars --window-size=1440,900 --virtual-time-budget=12000 "--screenshot=$file" $sites[$k] 2>$null | Out-Null
  "{0}: {1}" -f $k, $(if (Test-Path $file) { "{0} KB" -f [int]((Get-Item $file).Length / 1KB) } else { 'FAILED' })
}

