/**
 * **ansible** - pkgx package
 *
 * @domain `ansible.com`
 * @version `2.19.3` (79 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ansible.com`
 * @dependencies `pkgx.sh@1`
 * @buildDependencies `python.org@>=3.7<3.12` - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ansiblecom
 * console.log(pkg.name)        // "ansible"
 * console.log(pkg.versions[0]) // "2.19.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ansible-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ansiblecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ansible' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ansible.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ansible.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ansible.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ansible.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ansible.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   */
  dependencies: [
    'pkgx.sh@1',
  ] as const,
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   */
  buildDependencies: [
    'python.org@>=3.7<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.19.3',
    '2.19.2',
    '2.19.1',
    '2.19.0',
    '2.18.10',
    '2.18.9',
    '2.18.8',
    '2.18.7',
    '2.18.6',
    '2.18.5',
    '2.18.4',
    '2.18.3',
    '2.18.2',
    '2.18.1',
    '2.18.0',
    '2.17.14',
    '2.17.13',
    '2.17.12',
    '2.17.11',
    '2.17.10',
    '2.17.9',
    '2.17.7',
    '2.17.6',
    '2.17.5',
    '2.17.4',
    '2.17.3',
    '2.17.2',
    '2.17.1',
    '2.17.0',
    '2.16.14',
    '2.16.13',
    '2.16.12',
    '2.16.11',
    '2.16.10',
    '2.16.9',
    '2.16.8',
    '2.16.7',
    '2.16.6',
    '2.16.5',
    '2.16.4',
    '2.16.3',
    '2.16.2',
    '2.16.1',
    '2.16.0',
    '2.15.13',
    '2.15.12',
    '2.15.11',
    '2.15.10',
    '2.15.9',
    '2.15.8',
    '2.15.7',
    '2.15.6',
    '2.15.5',
    '2.15.4',
    '2.15.3',
    '2.15.2',
    '2.15.1',
    '2.15.0',
    '2.14.18',
    '2.14.17',
    '2.14.16',
    '2.14.15',
    '2.14.14',
    '2.14.13',
    '2.14.12',
    '2.14.11',
    '2.14.10',
    '2.14.9',
    '2.14.8',
    '2.14.7',
    '2.14.6',
    '2.14.5',
    '2.14.4',
    '2.14.3',
    '2.13.13',
    '2.13.12',
    '2.13.11',
    '2.13.10',
    '2.13.9',
  ] as const,
  aliases: [] as const,
}

export type AnsiblecomPackage = typeof ansiblecomPackage
