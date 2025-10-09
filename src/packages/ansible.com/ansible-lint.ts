/**
 * **ansible-lint** - ansible-lint checks playbooks for practices and behavior that could potentially be improved and can fix some of the most common ones for you
 *
 * @domain `ansible.com/ansible-lint`
 * @programs `ansible-lint`
 * @version `25.9.2` (30 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ansible-lint`
 * @name `ansible-lint`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ansiblelint
 * // Or access via domain
 * const samePkg = pantry.ansiblecomansiblelint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ansible-lint"
 * console.log(pkg.description) // "ansible-lint checks playbooks for practices and..."
 * console.log(pkg.programs)    // ["ansible-lint"]
 * console.log(pkg.versions[0]) // "25.9.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ansible-com/ansible-lint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ansiblelintPackage = {
  /**
   * The display name of this package.
   */
  name: 'ansible-lint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ansible.com/ansible-lint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'ansible-lint checks playbooks for practices and behavior that could potentially be improved and can fix some of the most common ones for you' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ansible.com/ansible-lint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ansible-lint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ansible-lint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.9.2',
    '25.9.1',
    '25.9.0',
    '25.8.2',
    '25.8.1',
    '25.8.0',
    '25.7.0',
    '25.6.1',
    '25.6.0',
    '25.5.0',
    '25.4.0',
    '25.2.1',
    '25.2.0',
    '25.1.3',
    '25.1.2',
    '25.1.1',
    '25.1.0',
    '24.12.2',
    '24.12.1',
    '24.12.0',
    '24.10.0',
    '24.9.2',
    '24.9.1',
    '24.9.0',
    '24.7.0',
    '24.6.1',
    '24.6.0',
    '24.5.0',
    '24.2.3',
    '24.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ansible-lint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ansible-lint' as const,
}

export type AnsiblelintPackage = typeof ansiblelintPackage
