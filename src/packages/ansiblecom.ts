/**
 * **ansible.com** - Package from pantry: ansible.com
 *
 * @domain `ansible.com`
 *
 * @install `launchpad install ansible.com`
 * @dependencies `pkgx.sh@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ansiblecom
 * console.log(pkg.name)        // "ansible.com"
 * console.log(pkg.description) // "Package from pantry: ansible.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ansible-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ansiblecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ansible.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ansible.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ansible.com' as const,
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
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ansible.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AnsiblecomPackage = typeof ansiblecomPackage
