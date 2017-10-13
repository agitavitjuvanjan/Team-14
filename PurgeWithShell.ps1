$endpoint = Get-AzureRmCdnEndpoint -ResourceGroupName Team-14CDNRG `
    -ProfileName Team-14CDN `
    -EndpointName Team-14CDNEP

$endpoint | Unpublish-AzureRmCdnEndpointContent -PurgeContent = "/*"