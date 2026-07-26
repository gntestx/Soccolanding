# Socco landing page

Svensk landningssida byggd med Blazor WebAssembly, C# och MudBlazor.

## Teknik

- .NET 9 / Blazor WebAssembly
- MudBlazor 9.7
- Responsiv, projektspecifik Socco-design ovanpå MudBlazors komponenter

## Kör lokalt

```bash
dotnet run --project SoccoLanding/SoccoLanding.csproj
```

## Publicera

```bash
dotnet publish SoccoLanding/SoccoLanding.csproj -c Release
```

Den statiska webbplatsen skapas under `SoccoLanding/bin/Release/net9.0/publish/wwwroot`.
