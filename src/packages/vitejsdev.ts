/**
 * **vite** - Next generation frontend tooling. It's fast!
 *
 * @domain `vitejs.dev`
 * @programs `vite`
 * @version `7.1.2` (110 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install vite`
 * @name `vite`
 * @dependencies `nodejs.org^16 || ^18 || ^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vite
 * // Or access via domain
 * const samePkg = pantry.vitejsdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vite"
 * console.log(pkg.description) // "Next generation frontend tooling. It's fast!"
 * console.log(pkg.programs)    // ["vite"]
 * console.log(pkg.versions[0]) // "7.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vitejs-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vitePackage = {
  /**
   * The display name of this package.
   */
  name: 'vite' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vitejs.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Next generation frontend tooling. It\'s fast!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vitejs.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vite' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vite',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^16 || ^18 || ^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.1.2',
    '7.1.1',
    '7.1.0',
    '7.0.6',
    '7.0.5',
    '7.0.4',
    '7.0.3',
    '7.0.2',
    '7.0.1',
    '7.0.0',
    '6.3.5',
    '6.3.3',
    '6.3.2',
    '6.3.1',
    '6.3.0',
    '6.2.5',
    '6.2.4',
    '6.2.2',
    '6.2.1',
    '6.2.0',
    '6.1.3',
    '6.1.1',
    '6.1.0',
    '6.0.14',
    '6.0.13',
    '6.0.11',
    '6.0.10',
    '6.0.9',
    '6.0.8',
    '6.0.7',
    '6.0.6',
    '6.0.5',
    '6.0.4',
    '6.0.3',
    '6.0.2',
    '6.0.1',
    '6.0.0',
    '5.4.17',
    '5.4.16',
    '5.4.14',
    '5.4.13',
    '5.4.12',
    '5.4.11',
    '5.4.10',
    '5.4.9',
    '5.4.8',
    '5.4.7',
    '5.4.6',
    '5.4.5',
    '5.4.4',
    '5.4.3',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.3.6',
    '5.3.5',
    '5.3.4',
    '5.3.3',
    '5.3.2',
    '5.3.1',
    '5.3.0',
    '5.2.14',
    '5.2.13',
    '5.2.12',
    '5.2.11',
    '5.2.10',
    '5.2.9',
    '5.2.8',
    '5.2.7',
    '5.2.6',
    '5.2.5',
    '5.2.4',
    '5.2.3',
    '5.2.2',
    '5.2.1',
    '5.2.0',
    '5.1.8',
    '5.1.7',
    '5.1.6',
    '5.1.5',
    '5.1.4',
    '5.1.3',
    '5.1.2',
    '5.1.1',
    '5.1.0',
    '5.0.11',
    '5.0.10',
    '5.0.9',
    '5.0.8',
    '5.0.7',
    '5.0.6',
    '5.0.5',
    '5.0.4',
    '5.0.3',
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.5.12',
    '4.5.11',
    '4.5.9',
    '4.5.8',
    '4.5.7',
    '4.5.6',
    '4.5.5',
    '4.5.1',
    '4.5.0',
    '4.4.12',
    '3.2.11',
    '3.2.10',
    '2.9.18',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) vite -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install vite' as const,
}

export type VitePackage = typeof vitePackage
