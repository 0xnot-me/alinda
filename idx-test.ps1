# IDX Test Command
Invoke-WebRequest -Uri "https://lindaolsson.com/idx-wrapper/mls-search" -Method GET -Headers @{"User-Agent"="curl/7.55.1"} | Select-Object -ExpandProperty StatusCode
