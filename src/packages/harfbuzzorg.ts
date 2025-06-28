/**
 * **harfbuzz.org** - Package from pantry: harfbuzz.org
 *
 * @domain `harfbuzz.org`
 *
 * @install `launchpad install harfbuzz.org`
 * @dependencies `cairographics.org@1`, `freetype.org@2`, `gnome.org/glib@2`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.harfbuzzorg
 * console.log(pkg.name)        // "harfbuzz.org"
 * console.log(pkg.description) // "Package from pantry: harfbuzz.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/harfbuzz-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const harfbuzzorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'harfbuzz.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'harfbuzz.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: harfbuzz.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install harfbuzz.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +harfbuzz.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install harfbuzz.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cairographics.org@1',
    'freetype.org@2',
    'gnome.org/glib@2',
    'graphite.sil.org',
    'unicode.org^71',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/harfbuzz.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HarfbuzzorgPackage = typeof harfbuzzorgPackage
