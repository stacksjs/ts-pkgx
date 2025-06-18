/**
 * **openbao** - OpenBao exists to provide a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.
 *
 * @domain `openbao.org/openbao`
 * @programs `bao`, `bao-setup`
 * @version `2.2.2` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +openbao.org/openbao -- $SHELL -i`
 * @name `openbao`
 * @dependencies `go.dev`, `gnu.org/coreutils`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.openbao
 * // Or access via domain
 * const samePkg = pantry.openbaoorgopenbao
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openbao"
 * console.log(pkg.description) // "OpenBao exists to provide a software solution t..."
 * console.log(pkg.programs)    // ["bao", "bao-setup"]
 * console.log(pkg.versions[0]) // "2.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openbao-org/openbao.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openbaoPackage = {
  /**
   * The display name of this package.
   */
  name: 'openbao' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openbao.org/openbao' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'OpenBao exists to provide a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openbao.org/openbao/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +openbao.org/openbao -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bao',
    'bao-setup',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
    'gnu.org/coreutils',
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.1',
    '2.1.0',
    '2.0.3',
    '2.0.2',
    '2.0.1',
    '2.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type OpenbaoPackage = typeof openbaoPackage
