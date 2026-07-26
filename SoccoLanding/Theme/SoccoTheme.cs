using MudBlazor;

namespace SoccoLanding.Theme;

/// <summary>
/// The Socco design system extracted from the original landing page on main.
/// Layout-specific artwork remains in CSS; shared color, type and shape tokens
/// live here so MudBlazor components inherit the same visual language.
/// </summary>
public static class SoccoTheme
{
    public static MudTheme Default { get; } = new()
    {
        PaletteLight = new PaletteLight
        {
            Primary = "#0d4a3b",
            Secondary = "#f47c5b",
            SecondaryLighten = "#f3a27e",
            Tertiary = "#241027",
            Info = "#b69ae8",
            Warning = "#e8ac3a",
            Background = "#f6f0e2",
            Surface = "#fffaf0",
            TextPrimary = "#172c26",
            TextSecondary = "#5f6d67",
            AppbarBackground = "#f6f0e2",
            AppbarText = "#172c26"
        },
        Typography = new Typography
        {
            Default = new DefaultTypography
            {
                FontFamily = ["Arial", "Helvetica", "sans-serif"]
            },
            H1 = new H1Typography
            {
                FontFamily = ["Georgia", "Times New Roman", "serif"],
                FontWeight = "500",
                LetterSpacing = "-0.055em",
                LineHeight = "0.97"
            },
            H2 = new H2Typography
            {
                FontFamily = ["Georgia", "Times New Roman", "serif"],
                FontWeight = "500",
                LetterSpacing = "-0.055em",
                LineHeight = "0.97"
            },
            Button = new ButtonTypography
            {
                FontFamily = ["Arial", "Helvetica", "sans-serif"],
                FontWeight = "800",
                LetterSpacing = "normal",
                TextTransform = "none"
            }
        },
        LayoutProperties = new LayoutProperties
        {
            DefaultBorderRadius = "16px"
        }
    };
}
