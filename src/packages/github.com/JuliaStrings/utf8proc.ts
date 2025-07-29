/**
 * **utf8proc** - Package from pantry: github.com/JuliaStrings/utf8proc
 *
 * @domain `github.com/JuliaStrings/utf8proc`
 *
 * @install `launchpad install github.com/JuliaStrings/utf8proc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjuliastringsutf8proc
 * console.log(pkg.name)        // "utf8proc"
 * console.log(pkg.description) // "Package from pantry: github.com/JuliaStrings/ut..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/JuliaStrings/utf8proc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjuliastringsutf8procPackage = {
  /**
   * The display name of this package.
   */
  name: 'utf8proc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/JuliaStrings/utf8proc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/JuliaStrings/utf8proc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/JuliaStrings/utf8proc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/JuliaStrings/utf8proc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/JuliaStrings/utf8proc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/JuliaStrings/utf8proc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomjuliastringsutf8procPackage = typeof githubcomjuliastringsutf8procPackage
