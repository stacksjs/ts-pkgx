/**
 * **fend** - Package from pantry: printfn.github.io/fend
 *
 * @domain `printfn.github.io/fend`
 *
 * @install `launchpad install printfn.github.io/fend`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.printfngithubiofend
 * console.log(pkg.name)        // "fend"
 * console.log(pkg.description) // "Package from pantry: printfn.github.io/fend"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/printfn-github-io/fend.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const printfngithubiofendPackage = {
  /**
   * The display name of this package.
   */
  name: 'fend' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'printfn.github.io/fend' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: printfn.github.io/fend' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install printfn.github.io/fend' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +printfn.github.io/fend -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install printfn.github.io/fend' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/printfn.github.io/fend/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PrintfngithubiofendPackage = typeof printfngithubiofendPackage
