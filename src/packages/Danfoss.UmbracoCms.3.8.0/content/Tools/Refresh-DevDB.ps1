$dbPath = ("{0}\..\App_Data\Umbraco.sdf" -f $PSScriptRoot)
$configPath = ("{0}\..\Web.config" -f $PSScriptRoot)

rm $dbPath -ErrorAction Ignore

[xml]$x = Get-Content $configPath

$configVersion = $x.SelectSingleNode('//*/appSettings/add[@key="umbracoConfigurationStatus"]')
$umbDBString = $x.SelectSingleNode('//*/connectionStrings/add[@name="umbracoDbDSN"]')
$umbDBString.connectionString = ""
$umbDBString.providerName = ""
$configVersion.value = ""

$x.Save($configPath)