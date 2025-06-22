/**
 * **rga** - rga: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc.
 *
 * @domain `crates.io/ripgrep-all`
 * @programs `rga`, `rga-fzf`, `rga-fzf-open`, `rga-preproc`
 * @version `0.10.9` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rga`
 * @name `rga`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rga
 * // Or access via domain
 * const samePkg = pantry.cratesioripgrepall
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rga"
 * console.log(pkg.description) // "rga: ripgrep, but also search in PDFs, E-Books,..."
 * console.log(pkg.programs)    // ["rga", "rga-fzf", ...]
 * console.log(pkg.versions[0]) // "0.10.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ripgrep-all.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rgaPackage = {
  /**
   * The display name of this package.
   */
  name: 'rga' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ripgrep-all' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'rga: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep-all/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rga' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rga',
    'rga-fzf',
    'rga-fzf-open',
    'rga-preproc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.9',
    '0.10.8',
    '0.10.7',
    '0.10.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/ripgrep-all -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rga' as const,
}

export type RgaPackage = typeof rgaPackage
