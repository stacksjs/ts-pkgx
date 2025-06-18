/**
 * **croc** - Easily and securely send things from one computer to another :crocodile: :package:
 *
 * @domain `schollz.com/croc`
 * @programs `croc`
 * @version `10.4.0` (35 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install croc`
 * @name `croc`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.croc
 * // Or access via domain
 * const samePkg = pantry.schollzcomcroc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "croc"
 * console.log(pkg.description) // "Easily and securely send things from one comput..."
 * console.log(pkg.programs)    // ["croc"]
 * console.log(pkg.versions[0]) // "10.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/schollz-com/croc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const crocPackage = {
  /**
   * The display name of this package.
   */
  name: 'croc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'schollz.com/croc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Easily and securely send things from one computer to another :crocodile: :package:' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/schollz.com/croc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install croc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'croc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '10.4.0',
    '10.2.2',
    '10.2.1',
    '10.2.0',
    '10.1.3',
    '10.1.2',
    '10.1.1',
    '10.1.0',
    '10.0.13',
    '10.0.12',
    '10.0.11',
    '10.0.10',
    '10.0.9',
    '10.0.8',
    '10.0.7',
    '10.0.6',
    '10.0.5',
    '10.0.4',
    '10.0.3',
    '10.0.2',
    '10.0.1',
    '10.0.0',
    '9.6.17',
    '9.6.16',
    '9.6.15',
    '9.6.14',
    '9.6.13',
    '9.6.12',
    '9.6.11',
    '9.6.10',
    '9.6.9',
    '9.6.8',
    '9.6.7',
    '9.6.6',
    '9.6.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CrocPackage = typeof crocPackage
